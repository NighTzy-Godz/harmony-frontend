import React from "react";
import "../assets/css/all_doctors.css";
import Filter from "../components/common/Filter";
import DoctorCard from "../components/ui/Card/DoctorCard";
import useAllDoctors from "../hooks/useAllDoctors";

const AllDoctors = () => {
  const { allDoctors } = useAllDoctors();

  const renderDoctorCard = allDoctors.map((item) => {
    return (
      <React.Fragment key={item._id}>
        <DoctorCard data={item} />
      </React.Fragment>
    );
  });

  return (
    <div className="all_doctors">
      <div className="container">
        <div className="all_doctors_left">
          <Filter />
        </div>
        <div className="all_doctors_right">
          <div className="all_doctors_grid">{renderDoctorCard}</div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
