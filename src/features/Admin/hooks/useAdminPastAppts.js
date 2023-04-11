import { useEffect } from "react";
import { useState } from "react";
import { getAdminPastAppointments } from "../../../services/adminDataServices";

const useAdminPastAppts = () => {
  const [allPastAppts, setAllPastAppts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAdminPastAppointments();

      setAllPastAppts(data);
    };

    getData();
  }, [allPastAppts]);

  return { allPastAppts };
};

export default useAdminPastAppts;
