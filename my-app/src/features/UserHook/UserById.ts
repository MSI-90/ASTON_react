import {useGetUserByIdQuery} from "../../entities/user/api/userApi.ts";
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";

export function useUserById() {
  const userId = useAppSelector(state => state.user.currentUserId);
  useGetUserByIdQuery({ userId }, {skip: userId === 0});
}