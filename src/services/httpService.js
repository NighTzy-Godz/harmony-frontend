import axios from "axios";
import { toast } from "react-toastify";
const unexpectedErr = "Unexpected Err";
const errMsg = "errMsg";

axios.interceptors.response.use(null, (err) => {
  const expectedErr =
    err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expectedErr) {
    toast.error("Unexpected Error Occured", {
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
