import { toast } from "react-toastify";
import http from "./httpService";

const BASE_URL = "http://localhost:8080/admin";

export function loginAdmin(data) {
  return http
    .post(`${BASE_URL}/login`, data)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}
