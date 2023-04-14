import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDoctors from "./pages/AllDoctors";
import Home from "./pages/Home";
import HomeLayout from "./page_layout/HomeLayout";
import dc from "./assets/img/503.png";

import { ToastContainer, toast } from "react-toastify";
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
import AdminAllAppts from "./features/Admin/components/AdminAllAppts";
import AdminAllPatients from "./features/Admin/components/AdminAllPatients";
import AdminAllDoctors from "./features/Admin/components/AdminAllDoctors";
import AdminPendingDoctors from "./features/Admin/components/AdminPendingDoctors";
import AdminProtect from "./components/common/ProtectedRoutes/AdminProtect";
import About from "./pages/About";
import PageNotFOund from "./components/common/PageNotFound";
import { useEffect, useState } from "react";
import ServiceUnavailable from "./components/common/ServiceUnavailable";

function App() {
  const { currUser } = useGetUser();

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      toast.success("Connection was Restored");
      setIsConnected(true);
    };
    const handleOffline = () => {
      toast.error("You Lost Your Network Connection");
      setIsConnected(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      {isConnected ? (
        <Routes>
          <Route path="/" element={<HomeLayout currUser={currUser} />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />

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
            <Route
              path="admin"
              element={
                <ProtectedRoutes user={currUser}>
                  <AdminProfileLayout user={currUser} />
                </ProtectedRoutes>
              }
            >
              <Route
                path="dashboard"
                element={
                  <AdminProtect user={currUser}>
                    <AdminDashboard />
                  </AdminProtect>
                }
              />
              <Route
                path="all-patients"
                element={
                  <AdminProtect user={currUser}>
                    <AdminAllPatients />
                  </AdminProtect>
                }
              />
              <Route
                path="all-appts"
                element={
                  <AdminProtect user={currUser}>
                    <AdminAllAppts />
                  </AdminProtect>
                }
              />
              <Route
                path="all-doctors"
                element={
                  <AdminProtect user={currUser}>
                    <AdminAllDoctors />
                  </AdminProtect>
                }
              />
              <Route
                path="pending-doctors"
                element={
                  <AdminProtect user={currUser}>
                    <AdminPendingDoctors />
                  </AdminProtect>
                }
              />
              <Route
                path="change-pass"
                element={
                  <AdminProtect user={currUser}>
                    <AdminChangePass />
                  </AdminProtect>
                }
              />
              <Route
                path="update-acc"
                element={
                  <AdminProtect user={currUser}>
                    <AdminAccount />
                  </AdminProtect>
                }
              />
            </Route>

            <Route path="*" element={<PageNotFOund />} />
          </Route>

          <Route path="/logout" element={<Logout />} />
        </Routes>
      ) : (
        <ServiceUnavailable />
      )}
    </BrowserRouter>
  );
}

export default App;
