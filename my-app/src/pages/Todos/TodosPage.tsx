import {useParams} from "react-router-dom";
import {useGetTodosByUserIdQuery} from "../../entities/user/api/userApi.ts";
import TodoCard from "../../entities/todos/ui/TodoCard.tsx";
import type {ITodos} from "../../entities/todos/Todos.ts";
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {todoSelector} from "../../entities/todos/model/slice/todoSlice.ts";

export default function Todos() {
  const {id, section} = useParams();
  if (!id || !section)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  useGetTodosByUserIdQuery({userId: Number(id), section: section});

  const data: ITodos[] = useAppSelector(todoSelector.selectAll);
  const loading: boolean = useAppSelector(state => state.todo.loading);

  return(
    <>
      <div className={'post-list'}>
        {loading && <h1>Loading...</h1>}
        {data.length === 0 && <p>Нет данных</p>}

        {data &&
          data.map((item: ITodos) => (
            <TodoCard {...item} key={crypto.randomUUID()} />
          ))
        }
      </div>
    </>
  )
}