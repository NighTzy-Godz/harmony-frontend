import BoxShadowCard from "./BoxShadowCard";
import "../../../assets/css/dashboard_status.css";

const DashboardStatusBox = ({ data }) => {
  const { img, name, info } = data;
  return (
    <BoxShadowCard>
      <div className="dashboard_status">
        {!img ? null : <img src={img} alt="" />}

        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    </BoxShadowCard>
  );
};

export default DashboardStatusBox;
