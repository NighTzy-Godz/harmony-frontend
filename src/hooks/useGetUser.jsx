import { useEffect, useState } from "react";
import { getUser } from "../utils/auth";

const useGetUser = () => {
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getUser();
        setCurrUser(user);
      } catch (ex) {
        return null;
      }
    };

    getData();
  }, []);

  return { currUser };
};

export default useGetUser;
