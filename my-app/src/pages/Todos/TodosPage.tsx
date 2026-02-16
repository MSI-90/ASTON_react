import {useParams} from "react-router-dom";
import {useGetTodosByUserIdQuery} from "../../entities/user/api/userApi.ts";
import TodoCard from "../../entities/todos/ui/TodoCard.tsx";
import type {ITodos} from "../../entities/todos/model/types/Todos.ts";
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {todoSelector} from "../../entities/todos/model/slice/todoSlice.ts";
import ItemList from "../../shared/ui/ItemList/ItemList.tsx";

export default function Todos() {
  const {id, section} = useParams();
  if (!id || !section)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  useGetTodosByUserIdQuery({userId: Number(id), section: section});

  const data: ITodos[] = useAppSelector(todoSelector.selectAll);
  const loading: boolean = useAppSelector(state => state.todo.loading);

  return(
    <>
      <ItemList<ITodos>
        itemList={data}
        componentOnRender={TodoCard}
        loading={loading}
        className={'post-list'}
      />
    </>
  )
}