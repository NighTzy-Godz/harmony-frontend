import React, { useEffect, useState } from "react";
import "../assets/css/all_doctors.css";
import Filter from "../components/common/Filter";
import DoctorCard from "../components/ui/Card/DoctorCard";
import useAllDoctors from "../hooks/useAllDoctors";
import { getUser } from "../utils/auth";
import SearchBar from "../components/common/SearchBar";
import { searchDoctor } from "../services/doctorDataServices";
import useSearchDoctor from "../hooks/useSearchDoctor";

const AllDoctors = ({ step = 1, onStepChange = () => {} }) => {
  const [search, setSearch] = useState("");
  const user = getUser();
  let doctors;
  const { allDoctors } = useAllDoctors();
  const { searchedDoc } = useSearchDoctor(search);

  if (!search) doctors = allDoctors;
  else doctors = searchedDoc;

  const handleSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  const renderDoctorCard = doctors.map((item) => {
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

  // const doctors = allDoctors;

  return (
    <div className="all_doctors">
      <div className="container">
        <div className="all_doctors_left">
          <Filter />
        </div>
        <div className="all_doctors_right">
          <SearchBar search={search} onSearchChange={handleSearch} />
          <div className="all_doctors_grid">{renderDoctorCard}</div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
