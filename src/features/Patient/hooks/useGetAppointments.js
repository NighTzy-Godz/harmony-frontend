import { useEffect, useState } from "react";
import { getPatientAppts } from "../../../services/patientDataServices";

const useGetAppointments = () => {
  const [appts, setAppts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await getPatientAppts();

      setAppts(data);
    };

    getData();
  }, []);

  return { appts };
};

export default useGetAppointments;
