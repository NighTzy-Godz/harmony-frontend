import "../assets/css/all_doctors.css";
import DoctorCard from "../components/ui/Card/DoctorCard";

const AllDoctors = () => {
  const arr = [1, 2, 3, 4, 5, , 6, 7, 8, 8, 8, 88, 8, 88, 8, 8, 8, 88];
  const renderDoctorCard = arr.map((item) => {
    return <DoctorCard />;
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
