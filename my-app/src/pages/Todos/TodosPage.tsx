import {useParams} from "react-router-dom";
import {useGetTodosByUserIdQuery} from "../../entities/user/api/userApi.ts";
import TodoItem from "../../entities/todos/ui/TodoItem.tsx";
import type {ITodosUser} from "../../entities/todos/Todos.ts";

export default function Todos() {
  const {id, section} = useParams();
  if (!id || !section)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  const {data, isLoading, error} =  useGetTodosByUserIdQuery({userId: Number(id), section: section});

  if ((Array.isArray(data) && data.length === 0))
    throw new Error("Нет ресурса");

  return(
    <>
      <div className={'post-list'}>
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Is error here!!!</p>}
        {data &&
          data.map((item: ITodosUser) => (
            <TodoItem {...item} key={crypto.randomUUID()} />
          ))
        }
      </div>
    </>
  )
}