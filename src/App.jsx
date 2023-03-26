import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDoctors from "./pages/AllDoctors";
import Home from "./pages/Home";
import HomeLayout from "./page_layout/HomeLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatientLogin from "./features/Patient/components/PatientLogin";
import PatientRegister from "./features/Patient/components/PatientRegister";
import { getUser } from "./utils/auth";
import PatientSettings from "./features/Patient/components/PatientSettings";
import useGetUser from "./hooks/useGetUser";

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
          <Route path="patient/login" element={<PatientLogin />} />
          <Route path="patient/register" element={<PatientRegister />} />

          <Route path="patient/settings" element={<PatientSettings />} />
        </Route>

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
