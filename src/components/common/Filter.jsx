import "../../assets/css/filter.css";
import specialties from "../../utils/specialties";

const Filter = () => {
  const renderFilter = specialties.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });
  return (
    <div className="filter">
      <div className="filter_header">
        <h1>Search Filter</h1>
      </div>
      <div className="filter_categories">
        <h3>Select Categories</h3>
        <ul>{renderFilter}</ul>
      </div>
      <div className="filter_gender">
        <h3>Gender</h3>

        <div className="filter_gender_container">
          <input type="radio" name="filter_gender" id="filter_male" />
          <label htmlFor="filter_male">Male</label>
        </div>

        <div className="filter_gender_container">
          <input type="radio" name="filter_gender" id="filter_female" />
          <label htmlFor="filter_female">Female</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
