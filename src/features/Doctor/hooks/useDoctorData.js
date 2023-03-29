import { useEffect, useState } from "react";
import { getCurrentDoctorData } from "../../../services/doctorDataServices";

const useDoctorData = () => {
  const [doc, setDoc] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await getCurrentDoctorData();

      setDoc(data);
    };

    getData();
  }, []);

  return { doc };
};

export default useDoctorData;
