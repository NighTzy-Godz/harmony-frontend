import axios from "axios";
import { toast } from "react-toastify";
const unexpectedErr = "Unexpected Err";
const errMsg = "errMsg";

const customErrorMsg = (err) => {
  if (err.response.status === 500) return "Server is Currently Down";
};

axios.interceptors.response.use(null, (err) => {
  const expectedErr =
    err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expectedErr) {
    toast.error(`Unexpected Error Occured. ${customErrorMsg(err)}`, {
      autoClose: 2500,
      toastId: unexpectedErr,
    });
  }

  return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
