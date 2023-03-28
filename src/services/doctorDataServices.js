import { toast } from "react-toastify";
import http from "./httpService";

const BASE_URL = "http://localhost:8080/doctor";

export function loginDoctor(data) {
  return http
    .post(`${BASE_URL}/login`, data)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function registerDoctor(data) {
  return http
    .post(`${BASE_URL}/register`, data)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function getAllDoctors() {
  return http.get(`${BASE_URL}/all-doctors`);
}
