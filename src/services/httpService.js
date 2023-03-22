import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (err) => {
  const expectedErr = err.response && err.response >= 400 && err.response < 500;

  if (!expectedErr) {
    toast.error("Unexpected Error Occured", { autoClose: 2500 });
    console.log(err);
  }

  return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
