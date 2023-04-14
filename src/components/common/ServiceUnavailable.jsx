import service_unavailable from "../../assets/img/503.png";
import "../../assets/css/503.css";

const ServiceUnavailable = () => {
  return (
    <div className="service_unavailable">
      <div className="container">
        <div className="service_unavailable">
          <img src={service_unavailable} alt="" />
        </div>
        <div className="text">
          <h1>
            Sorry, we're currently unable to serve your request. Please try
            again later.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceUnavailable;
