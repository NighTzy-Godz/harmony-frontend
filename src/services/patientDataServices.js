import http from "./httpService";
const BASE_URL = "http://localhost:8080/patient";
import { toast } from "react-toastify";

export function getPatientData() {
  return http
    .get(`${BASE_URL}/me`)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function loginPatient(data) {
  return http
    .post(`${BASE_URL}/login`, data)
    .then((user) => {
      toast.success("Logged In", { autoClose: 2000 });

      return user;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function registerPatient(data) {
  return http
    .post(`${BASE_URL}/register`, data)
    .then((data) => {
      console.log(data);
      toast.success(`Account successfully created for ${data.data.full_name}`);
      return data;
    })
    .catch((err) => {
      console.log(err);
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}
