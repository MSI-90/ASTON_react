import {type ChangeEvent, useId, useState} from "react";
import './User.css';
import {useUserById} from "../../features/UserHook/UserById.ts";
import {useAppDispatch} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {setCurrentUserId} from "../../entities/user/model/slice/userSlice.ts";

export default function UserPage() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const inputId = useId();

  interface MinMax {
    min: number;
    max: number;
  }

  const minMaxInput: MinMax = {
    min: 1,
    max: 2,
  }

  // кастомный хук для RTK Query эндпоинта
  useUserById();

  function getUserInfo(event: ChangeEvent<HTMLInputElement>) {
    const id = Number(event.target.value);
    setValue(event.target.value);
    dispatch(setCurrentUserId(id));
  }

  return(
    <>
      <article>
        <label htmlFor={inputId}>Укажите идентификатор пользователя</label>
        <input
          type={'number'}
          name={inputId}
          value={value}
          minLength={minMaxInput.min}
          maxLength={minMaxInput.max}
          onChange={(e) => getUserInfo(e)}
        />
      </article>
    </>
  )
}