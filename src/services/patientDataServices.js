import formatDate from "../utils/formatDate";
import formatTime from "../utils/formatTime";
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
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function getPatientPrescription() {
  return http.get(`${BASE_URL}/prescription`).catch((err) => {
    if (err.response && err.response.status >= 500) return;
    toast.error(err.response.data, { autoClose: 2000 });
    return err;
  });
}

export function getPatientAppts() {
  return http
    .get(`${BASE_URL}/getAppointments`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function getMedicalRecords() {
  return http
    .get(`${BASE_URL}/medical-records`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function cancelAppointment(data) {
  return http
    .post(`${BASE_URL}/cancel-appt`, data)
    .then((appt) => {
      toast.success("Appointment was succesfully cancelled", {
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

export function createAppointment(data) {
  return http
    .post(`${BASE_URL}/request-appt`, data)
    .then((appt) => {
      toast.success(
        "Appointment was succesfully requested. Kindly check later for the result.",
        { autoClose: 2000 }
      );
      return appt;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function donePrescription(data) {
  return http
    .post(`${BASE_URL}/post-prescription`, data)
    .then((appt) => {
      toast.success(
        "This appointment is going to Medical Records Tab. You can check it.",
        { autoClose: 2000 }
      );
      return appt;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}

export function patientUpdatePassword(data) {
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

export function deleteAppt(data) {
  return http
    .delete(`${BASE_URL}/post-appt/${data.appt_id}`)
    .then((appt) => {
      console.log(appt);
      toast.success("Successfully Deleted!");
      return appt;
    })
    .catch((err) => {
      if (err.response && err.response.status >= 500) return;
      toast.error(err.response.data, { autoClose: 2000 });
      return err;
    });
}
