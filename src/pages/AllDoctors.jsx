import React, { useEffect, useState } from "react";
import "../assets/css/all_doctors.css";
import Filter from "../components/common/Filter";
import DoctorCard from "../components/ui/Card/DoctorCard";
import useAllDoctors from "../hooks/useAllDoctors";
import { getUser } from "../utils/auth";
import SearchBar from "../components/common/SearchBar";
import { searchDoctor } from "../services/doctorDataServices";
import useSearchDoctor from "../hooks/useSearchDoctor";
import paginate from "../utils/paginate";
import Paginate from "../components/common/Paginate";

const AllDoctors = ({ step = 1, onStepChange = () => {} }) => {
  const [state, setState] = useState({
    search: "",
    pageSize: 6,
    currPage: 1,
  });

  const { search, pageSize, currPage } = state;

  const user = getUser();
  let doctors;
  const { allDoctors } = useAllDoctors();
  const { searchedDoc } = useSearchDoctor(search);

  if (!search) doctors = allDoctors;
  else doctors = searchedDoc;

  const paginatedDoctors = paginate(pageSize, doctors, currPage);

  const renderDoctorCard = paginatedDoctors.map((item) => {
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

  const handleSearch = (e) => {
    setState({ ...state, search: e.currentTarget.value });
  };

  const handlePageChange = (page) => {
    setState({ ...state, currPage: page });
  };

  return (
    <div className="all_doctors">
      <div className="container">
        <div className="all_doctors_left">
          <Filter />
        </div>
        <div className="all_doctors_right">
          <SearchBar search={search} onSearchChange={handleSearch} />
          <div className="all_doctors_grid">{renderDoctorCard}</div>
          <Paginate
            itemCount={doctors.length}
            currPage={currPage}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
