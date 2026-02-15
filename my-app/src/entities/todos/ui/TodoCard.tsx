import type {ITodos} from "../model/types/Todos.ts";
import './TodoCard.css';

export default function TodoCard(props: ITodos) {
  const {userId, id, title, completed} = props;
  return (
    <>
      <section className={'todo-item'}>
        <article>
          <span>
            Идентификатор пользователя:
          </span>
          {userId}
        </article>
        <article>
          <span>
            Идентификатор ресурса:
          </span>
          {id}
        </article>
        <article>
          <span>
            Наименование ресурса:
          </span>
          {title}
        </article>
        <article>
          <span>
            Задача выполнена?
          </span>
          {completed ? 'Да' : 'Нет'}
        </article>
      </section>
    </>
  )
}