import { useEffect, useState } from "react";
import { getUnconfirmedDocs } from "../../../services/adminDataServices";

const useUnconfirmedDoctors = () => {
  const [unconfirmedDocs, setUncofirmedDocs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getUnconfirmedDocs();

      setUncofirmedDocs(data);
    };

    getData();
  }, [unconfirmedDocs]);

  return { unconfirmedDocs };
};

export default useUnconfirmedDoctors;
