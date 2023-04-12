import { useEffect, useState } from "react";
import { getAllPatients } from "../../../services/adminDataServices";

const useGetAllPatients = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await getAllPatients();
      setPatients(data);
    };
    getData();
  }, [patients]);

  return { patients };
};

export default useGetAllPatients;
