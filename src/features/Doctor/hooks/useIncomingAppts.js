import { useEffect, useState } from "react";
import { getIncomingAppointments } from "../../../services/doctorDataServices";

const useIncomingAppts = () => {
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getIncomingAppointments();
      setAppts(data);
    };
    getData();
  }, []);

  return { appts };
};

export default useIncomingAppts;
