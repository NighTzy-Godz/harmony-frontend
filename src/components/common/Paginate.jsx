import _ from "lodash";
import "../../assets/css/paginate.css";

const Paginate = ({ currPage, itemCount, pageSize, onPageChange }) => {
  const pageCount = itemCount / pageSize;

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <div className="paginate">
      <ul>
        {pages.map((item) => {
          return (
            <li
              className={`${currPage === item ? "active" : ""}`}
              onClick={() => onPageChange(item)}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginate;
