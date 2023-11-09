import { useMutation, useQueryClient } from "react-query";

import useAuth from "./useAuth";
import axios from "../api/axios";

const useCreateData = () => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();

  const createData = (data) => {
    return axios.post("api/meals/", data, {
      headers: { Authorization: `JWT ${auth.accessToken}` },
    });
  };

  return useMutation(createData, {
    onSuccess: () => {
      queryClient.invalidateQueries("meals");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useCreateData;
