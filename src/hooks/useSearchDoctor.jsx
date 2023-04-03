import { useEffect, useState } from "react";
import { searchDoctor } from "../services/doctorDataServices";

const useSearchDoctor = (search) => {
  const [searchedDoc, setSearchedDoc] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (search) {
        const { data } = await searchDoctor(search);
        setSearchedDoc(data);
      }
    };
    getData();
  }, [search]);

  return { searchedDoc };
};
export default useSearchDoctor;
