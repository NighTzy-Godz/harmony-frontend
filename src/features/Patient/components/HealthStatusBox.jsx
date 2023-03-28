const HealthStatusBox = ({ data }) => {
  const { img, name, info } = data;
  return (
    <div className="health_status_box">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{info}</p>
    </div>
  );
};

export default HealthStatusBox;
