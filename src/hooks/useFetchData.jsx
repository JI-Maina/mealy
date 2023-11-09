import { useQuery } from "react-query";

import useAuth from "./useAuth";
import axios from "../api/axios";

const useFetchData = (key, url) => {
  const { auth } = useAuth();

  const fetchData = () => {
    return axios(url, {
      headers: { Authorization: `JWT ${auth.accessToken}` },
    });
  };

  return useQuery(key, fetchData);
};

export default useFetchData;
