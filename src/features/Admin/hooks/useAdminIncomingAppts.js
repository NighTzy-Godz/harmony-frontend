import { useEffect } from "react";
import { useState } from "react";
import { getAdminIncomingAppointments } from "../../../services/adminDataServices";

const useAdminIncomingAppts = () => {
  const [allAppts, setAllAppt] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAdminIncomingAppointments();

      setAllAppt(data);
    };

    getData();
  }, [allAppts]);

  return { allAppts };
};

export default useAdminIncomingAppts;
