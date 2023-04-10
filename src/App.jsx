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
import DoctorWaiting from "./features/Doctor/components/DoctorWaiting";
import AdminLogin from "./features/Admin/components/AdminLogin";
import AdminDashboard from "./features/Admin/components/AdminDashboard";
import AdminProfileLayout from "./features/Admin/components/AdminProfileLayout";
import AdminChangePass from "./features/Admin/components/AdminChangePass";
import AdminAccount from "./features/Admin/components/AdminAccount";

function App() {
  const { currUser } = useGetUser();
  console.log(currUser);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeLayout currUser={currUser} />}>
          <Route index element={<Home />} />
          <Route path="all-doctors" element={<AllDoctors />} />
          <Route path="admin/login" element={<AdminLogin />} />
          {/* PATIENT ROUTE */}
          <Route
            path="patient"
            element={
              <ProtectedRoutes user={currUser}>
                <PatientProfileLayout />
              </ProtectedRoutes>
            }
          >
            <Route
              path="dashboard"
              element={
                <PatientProtect user={currUser}>
                  <PatientDashboard />
                </PatientProtect>
              }
            />
            <Route
              path="change-pass"
              element={
                <PatientProtect user={currUser}>
                  <PatientChangePass />
                </PatientProtect>
              }
            />
            <Route
              path="update-acc"
              element={
                <PatientProtect user={currUser}>
                  <PatientAccount />
                </PatientProtect>
              }
            />
          </Route>
          <Route
            path="patient/login"
            element={<PatientLogin user={currUser} />}
          />
          <Route
            path="patient/register"
            element={<PatientRegister user={currUser} />}
          />

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

          <Route
            path="doctor/confirmation"
            element={
              <DoctorProtect user={currUser}>
                <DoctorWaiting />
              </DoctorProtect>
            }
          />

          <Route
            path="doctor/login"
            element={<DoctorLogin user={currUser} />}
          />
          <Route
            path="doctor/register"
            element={<DoctorRegister user={currUser} />}
          />
          {/* ADMIN ROUTE */}
          <Route path="admin" element={<AdminProfileLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="change-pass" element={<AdminChangePass />} />
            <Route path="update-acc" element={<AdminAccount />} />
          </Route>
        </Route>

        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
