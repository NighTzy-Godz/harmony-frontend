import React from "react";
import "../assets/css/all_doctors.css";
import Filter from "../components/common/Filter";
import DoctorCard from "../components/ui/Card/DoctorCard";
import useAllDoctors from "../hooks/useAllDoctors";
import { getUser } from "../utils/auth";

const AllDoctors = ({ step = 1, onStepChange = () => {} }) => {
  const { allDoctors } = useAllDoctors();
  const user = getUser();

  const renderDoctorCard = allDoctors.map((item) => {
    return (
      <React.Fragment key={item._id}>
        <DoctorCard
          data={item}
          user={user}
          step={step}
          onStepChange={onStepChange}
        />
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
