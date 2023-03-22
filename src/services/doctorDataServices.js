import { toast } from "react-toastify";
import http from "./httpService";

const BASE_URL = "http://localhost:8080/doctor";

export function getAllDoctors() {
  return http.get(`${BASE_URL}/all-doctors`);
}
