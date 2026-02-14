import {useGetUserByIdQuery} from "../../entities/user/api/userApi.ts";
import {useState} from "react";

export function useUserById(initialId?: number) {
  const [userId, setUsId] = useState(initialId ?? 0);
  const query = useGetUserByIdQuery({ userId });

  return { query, setUsId };
}