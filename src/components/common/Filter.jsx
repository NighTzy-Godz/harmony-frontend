import "../../assets/css/filter.css";

const Filter = ({
  currGender,
  currSpecialty,
  specialtyFilter,
  genderFilter,
  onGenderChange,
  onSpecialtyChange,
}) => {
  const renderFilter = specialtyFilter.map((item) => {
    return (
      <div className="filter_radio_container" key={item.id}>
        <input
          type="radio"
          name="filter_categories"
          id={item.name}
          value={item.name}
          checked={item.name === currSpecialty}
          onChange={onSpecialtyChange}
        />
        <label htmlFor={item.name}>{item.name}</label>
      </div>
    );
  });
  return (
    <div className="filter">
      <div className="filter_header">
        <h1>Search Filter</h1>
      </div>
      <div className="filter_categories">
        <h3>Select Categories</h3>
        {renderFilter}
      </div>
      <div className="filter_gender">
        <h3>Gender</h3>

        {genderFilter.map((item) => {
          return (
            <div className="filter_radio_container" key={item.id}>
              <input
                type="radio"
                name="filter_gender"
                id={item.name}
                checked={item.name === currGender}
                onChange={onGenderChange}
                value={item.name}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
