import { useEffect, useState } from "react";
import { getRequestAppointments } from "../../../services/doctorDataServices";

const useReqAppts = () => {
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getRequestAppointments();
      setAppts(data);
    };

    getData();
  }, [appts, getRequestAppointments]);

  return { appts };
};

export default useReqAppts;
