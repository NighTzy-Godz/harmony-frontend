import "../../assets/css/no_data.css";

const NoData = ({ label }) => {
  return (
    <div className="no_data">
      <h3>{label}</h3>
    </div>
  );
};

export default NoData;
