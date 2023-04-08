import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDoctors from "./pages/AllDoctors";
import Home from "./pages/Home";
import HomeLayout from "./page_layout/HomeLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatientLogin from "./features/Patient/components/PatientLogin";
import PatientRegister from "./features/Patient/components/PatientRegister";
import useGetUser from "./hooks/useGetUser";
import Logout from "./components/common/Logout";
import DoctorLogin from "./features/Doctor/components/DoctorLogin";
import DoctorRegister from "./features/Doctor/components/DoctorRegister";

import PatientCreateAppt from "./features/Patient/components/PatientCreateAppt";
import PatientProfileLayout from "./features/Patient/components/PatientProfileLayout";
import PatientDashboard from "./features/Patient/components/PatientDashboard";
import PatientChangePass from "./features/Patient/components/PatientChangePass";
import PatientAccount from "./features/Patient/components/PatientAccount";

import DoctorProfileLayout from "./features/Doctor/components/DoctorProfileLayout";

import DoctorDashboard from "./features/Doctor/components/DoctorDashboard";
import DoctorChangePass from "./features/Doctor/components/DoctorChangePass";
import DoctorAccount from "./features/Doctor/components/DoctorAccount";
import ProtectedRoutes from "./components/common/ProtectedRoutes/ProtectedRoutes";
import PatientProtect from "./components/common/ProtectedRoutes/PatientProtect";
import DoctorProtect from "./components/common/ProtectedRoutes/DoctorProtect";

function App() {
  const { currUser } = useGetUser();

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeLayout currUser={currUser} />}>
          <Route index element={<Home />} />
          <Route path="all-doctors" element={<AllDoctors />} />

          {/* PATIENT ROUTE */}
          <Route
            path="patient"
            element={
              <ProtectedRoutes user={currUser}>
                <PatientProfileLayout />
              </ProtectedRoutes>
            }
          >
            <Route path="dashboard" element={<PatientDashboard />} />
            <Route path="change-pass" element={<PatientChangePass />} />
            <Route path="update-acc" element={<PatientAccount />} />
          </Route>
          <Route path="patient/login" element={<PatientLogin />} />
          <Route path="patient/register" element={<PatientRegister />} />

          <Route
            path="patient/create-appointment"
            element={<PatientCreateAppt />}
          />

          {/* DOCTOR ROUTE */}
          <Route
            path="doctor"
            element={
              <ProtectedRoutes user={currUser}>
                <DoctorProfileLayout />
              </ProtectedRoutes>
            }
          >
            <Route
              path="dashboard"
              element={
                <DoctorProtect user={currUser}>
                  <DoctorDashboard />
                </DoctorProtect>
              }
            />
            <Route
              path="change-pass"
              element={
                <DoctorProtect user={currUser}>
                  <DoctorChangePass />
                </DoctorProtect>
              }
            />
            <Route
              path="update-acc"
              element={
                <DoctorProtect user={currUser}>
                  <DoctorAccount />
                </DoctorProtect>
              }
            />
          </Route>
          <Route path="doctor/login" element={<DoctorLogin />} />
          <Route path="doctor/register" element={<DoctorRegister />} />
        </Route>

        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
