import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDoctors from "./pages/AllDoctors";
import Home from "./pages/Home";
import HomeLayout from "./page_layout/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="all-doctors" element={<AllDoctors />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
