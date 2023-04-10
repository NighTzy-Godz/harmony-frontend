import { toast } from "react-toastify";
import http from "./httpService";

const BASE_URL = "http://localhost:8080/admin";

export function getAdminData() {
  return http
    .get(`${BASE_URL}/me`)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000, toastId: "1" });
      return err;
    });
}

export function adminUpdatePassword(data) {
  return http
    .post(`${BASE_URL}/update-pass`, data)
    .then((appt) => {
      toast.success("Password has been successfully changed.", {
        autoClose: 2000,
      });
      return appt;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

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
