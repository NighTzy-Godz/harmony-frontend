import "../../../assets/css/doctor_short_status.css";

const DocShortStatus = ({ data }) => {
  return (
    <div className="doc_short_status">
      <h3>{data.name}</h3>
      <p>{data.data}</p>
    </div>
  );
};

export default DocShortStatus;
