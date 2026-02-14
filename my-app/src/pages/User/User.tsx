import {type ChangeEvent, useEffect, useId, useState} from "react";
import './User.css';
import {useUserById} from "../../features/UserHook/UserById.ts";

export default function UserPage() {
  const [userId, setUserId] = useState<number>(0);
  const inputId = useId();

  interface MinMax {
    min: number;
    max: number;
  }

  const minMaxInput: MinMax = {
    min: 1,
    max: 2,
  }

  const { query, setUsId } = useUserById();

  const getUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const userIdValue = Number(event.target.value);
    setUserId(userIdValue);

    if (userIdValue === 0) return;
    setUsId(userIdValue);
  }

  useEffect(() => {
    console.log(userId);
  },[userId])

  useEffect(() => {
    console.log(query.data);

  }, [query.data]);

  return(
    <>
      <article>
        <label htmlFor={inputId}>Укажите идентификатор пользователя</label>
        <input
          type={'text'}
          name={inputId}
          value={userId}
          minLength={minMaxInput.min}
          maxLength={minMaxInput.max}
          onChange={(e) => getUserInfo(e)}
        />
      </article>
    </>
  )
}