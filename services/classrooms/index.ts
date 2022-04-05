import {
  useQuery,
  MutationFunction,
  QueryCache,
  useMutation,
} from "react-query";
import axios from "axios";

import { Classroom } from "@Organisms/Classes/type";
import { fortmatResponse } from "@Utils/formatResponse";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json",
  },
});

const _URL_API = "/api/classrooms";
const _KEY = "classrooms";

const create: MutationFunction<null, Classroom> = async ({
  label,
}): Promise<null> => {
  const response = await apiClient.post<any>("/classrooms", { label });
  return response.data;
};

export const useMutationClassrooms = () => useMutation(create);

// const findAll = async () => {
//   const response = await apiClient.get<Classroom[]>("/tutorials");
//   return response.data;
// };

export function useClassrooms() {
  return useQuery(_KEY, () => axios.get(_URL_API).then((res) => res.data));
}
