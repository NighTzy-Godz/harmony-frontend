import page_not_found from "../../assets/img/404.png";
import LinkButton from "../ui/Button/LinkButton";
import "../../assets/css/404.css";

const PageNotFOund = () => {
  return (
    <div className="page_not_found">
      <div className="container">
        <div className="page_not_found_image">
          <img src={page_not_found} alt="" />
        </div>
        <div className="text">
          <p>
            Oops! The page you were looking for seems to have gone missing. We
            apologize for the inconvenience. Please check the URL and try again,
            or click below to go back to our homepage.
          </p>
          <LinkButton label="Go Back to Home Page" path="/" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFOund;
