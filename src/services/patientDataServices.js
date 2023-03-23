import http from "./httpService";
const BASE_URL = "http://localhost:8080/patient";
import { toast } from "react-toastify";

export function loginPatient(data) {
  return http
    .post(`${BASE_URL}/login`, data)
    .then((user) => {
      toast.success("Logged In", { autoClose: 2000 });

      return user;
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}
