import { useEffect } from "react";
import { useState } from "react";
import { getPatientPrescription } from "../../../services/patientDataServices";

const useGetPrescriptions = () => {
  const [prescript, setPrescript] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getPatientPrescription();
      setPrescript(data);
    };
    getData();
  }, [prescript, getPatientPrescription]);

  return { prescript };
};

export default useGetPrescriptions;
