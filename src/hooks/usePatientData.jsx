import { useEffect, useState } from "react";
import { getPatientData } from "../services/patientDataServices";

const usePatientData = () => {
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await getPatientData();
      setPatient(data);
    };

    getData();
  }, [patient]);

  return { patient };
};

export default usePatientData;
