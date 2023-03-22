import "../assets/css/all_doctors.css";
import DoctorCard from "../components/ui/Card/DoctorCard";
import useAllDoctors from "../hooks/useAllDoctors";

const AllDoctors = () => {
  const { allDoctors } = useAllDoctors();

  const renderDoctorCard = allDoctors.map((item) => {
    return <DoctorCard data={item} />;
  });

  return (
    <div className="all_doctors">
      <div className="container">
        <div className="all_doctors_left">filter here</div>
        <div className="all_doctors_right">
          <div className="all_doctors_grid">{renderDoctorCard}</div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
