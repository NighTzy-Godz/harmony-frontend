import { useEffect, useState } from "react";
import { getAdminData } from "../../../services/adminDataServices";

const useAdminData = () => {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAdminData();
      setAdmin(data);
    };

    getData();
  }, [admin]);
  return { admin };
};

export default useAdminData;
