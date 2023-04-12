import { useEffect, useState } from "react";
import { getAllDoctors } from "../services/doctorDataServices";

const useAllDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAllDoctors();

      setAllDoctors(data);
    };

    getData();
  }, [allDoctors]);

  return { allDoctors };
};

export default useAllDoctors;
