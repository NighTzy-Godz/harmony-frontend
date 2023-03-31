import { useEffect, useState } from "react";
import { getMedicalRecords } from "../../../services/patientDataServices";

const useGetMedicalRecs = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getMedicalRecords();

      setRecords(data);
    };

    getData();
  });

  return { records };
};

export default useGetMedicalRecs;
