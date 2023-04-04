import _ from "lodash";
import "../../assets/css/paginate.css";
import { useEffect } from "react";

const Paginate = ({
  data,
  currPage,
  itemCount,
  pageSize,
  onPageChange,
  removable = false,
}) => {
  const pageCount = itemCount / pageSize;

  useEffect(() => {
    if (data.length === 0 && currPage > 1) {
      return onPageChange(currPage - 1);
    }
  }, [currPage, data]);

  if (pageCount <= 1) {
    return null;
  }

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
