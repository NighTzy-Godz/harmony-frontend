import React, { useEffect, useState } from "react";
import "../assets/css/all_doctors.css";
import Filter from "../components/common/Filter";
import DoctorCard from "../components/ui/Card/DoctorCard";
import useAllDoctors from "../hooks/useAllDoctors";
import { getUser } from "../utils/auth";
import SearchBar from "../components/common/SearchBar";
import useSearchDoctor from "../hooks/useSearchDoctor";
import paginate from "../utils/paginate";
import Paginate from "../components/common/Paginate";
import specialties from "../utils/specialties";
import gender from "../utils/gender";
import filterDoc from "../utils/filterDoc";

const AllDoctors = ({ step = 1, onStepChange = () => {} }) => {
  const [state, setState] = useState({
    search: "",
    pageSize: 6,
    currPage: 1,
    currGender: "",
    currSpecialty: "",
    genderFilter: gender,
    specialtyFilter: specialties,
  });

  const {
    currGender,
    currSpecialty,
    genderFilter,
    specialtyFilter,
    search,
    pageSize,
    currPage,
  } = state;

  useEffect(() => {
    setState({
      ...state,
      genderFilter: [{ name: "All Gender" }, ...gender],
      specialtyFilter: [{ name: "All Specialties" }, ...specialties],
      currGender: "All Gender",
      currSpecialty: "All Specialties",
    });
  }, []);
  const { allDoctors } = useAllDoctors();
  const { searchedDoc } = useSearchDoctor(search);
  const user = getUser();
  let doctors = allDoctors;

  if (search) {
    doctors = searchedDoc;
  } else {
    doctors = filterDoc(allDoctors, currGender, currSpecialty);
  }

  const paginatedDoctors = paginate(pageSize, doctors, currPage);

  const handleSearch = (e) => {
    setState({
      ...state,
      search: e.currentTarget.value,
      currGender: "All Gender",
      currSpecialty: "All Specialties",
      currPage: 1,
    });
  };

  const handlePageChange = (page) => {
    setState({ ...state, currPage: page });
  };

  const handleGenderChange = (e) => {
    setState({
      ...state,
      currGender: e.currentTarget.value,
      search: "",
      currPage: 1,
    });
  };

  const handleSpecialtyChange = (e) => {
    setState({
      ...state,
      currSpecialty: e.currentTarget.value,
      search: "",
      currPage: 1,
    });
  };

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

  return (
    <div className="all_doctors">
      <div className="container">
        <div className="all_doctors_left">
          <Filter
            currGender={currGender}
            currSpecialty={currSpecialty}
            specialtyFilter={specialtyFilter}
            genderFilter={genderFilter}
            onGenderChange={handleGenderChange}
            onSpecialtyChange={handleSpecialtyChange}
          />
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
