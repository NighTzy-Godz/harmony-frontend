import { toast } from "react-toastify";
import http from "./httpService";

const BASE_URL = "http://localhost:8080/doctor";

export function getAllDoctors() {
  return http.get(`${BASE_URL}/all-doctors`).catch((err) => {
    toast.error(err.response.data, { autoClose: 2000 });
    return err;
  });
}

export function getCurrentDoctorData() {
  return http.get(`${BASE_URL}/me`).catch((err) => {
    toast.error(err.response.data, { autoClose: 2000 });
    return err;
  });
}

export function getRequestAppointments() {
  return http.get(`${BASE_URL}/req-appts`).catch((err) => {
    toast.error(err.response.data, { autoClose: 2000 });
    return err;
  });
}

export function getIncomingAppointments() {
  return http.get(`${BASE_URL}/incoming-appts`).catch((err) => {
    toast.error(err.response.data, { autoClose: 2000 });
    return err;
  });
}

export function doctorDecideAppt(data) {
  return http
    .post(`${BASE_URL}/decide-appt`, data)
    .then((appt) => {
      toast.success(
        `Successfully ${data.status.toLowerCase()} the request Appointment!`,
        { autoClose: 2000 }
      );
      return appt;
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

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
