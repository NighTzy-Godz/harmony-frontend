import _ from "lodash";

export default function paginate(pageSize, data, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(data).slice(startIndex).take(pageSize).value();
}
