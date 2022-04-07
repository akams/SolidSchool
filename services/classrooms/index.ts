import {
  useQuery,
  MutationFunction,
  QueryCache,
  useMutation,
  useQueryClient
} from "react-query";
import axios from "axios";

import { Classroom } from "@Organisms/Classrooms/type";
import { fortmatResponse } from "@Utils/formatResponse";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json",
  },
});

const _QUERY_KEY = "classrooms";

const getClassrooms = async (): Promise<null> => {
  const response = await apiClient.get<any>("/classrooms");
  return response.data;
};

const createClassroom: MutationFunction<null, Classroom> = async ({
  label,
}): Promise<null> => {
  const response = await apiClient.post<any>("/classrooms", { label });
  return response.data;
};

const deleteClassroom: MutationFunction<null, number> = async (id: number): Promise<null> => {
  const response = await apiClient.delete<any>(`/classrooms/${id}`);
  return response.data;
};

export const useCreationMutationClassrooms = () => useMutation(createClassroom);
// export const useDeleteMutationClassrooms = (queryClient: any) => useMutation(deleteClassroom);
export const useDeleteMutationClassrooms = (queryClient: any) => useMutation(deleteClassroom, {
  onSuccess: () => {
    queryClient.invalidateQueries(_QUERY_KEY)
  },
});


export const useClassrooms = () => useQuery(_QUERY_KEY, getClassrooms)
