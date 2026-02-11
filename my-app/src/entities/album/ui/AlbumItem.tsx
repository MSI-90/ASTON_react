import './AlbumItem.css';
import type {IAlbumUser} from "../Album.ts";

export function AlbumItem(props: IAlbumUser) {
  const {userId, id, title} = props;
  return (
    <>
      <section className={'album-item'}>
        <article>
          <span>
            Идентификатор пользователя:
          </span>
          {userId}
        </article>
        <article>
          <span>
            Идентификатор альбома:
          </span>
          {id}
        </article>
        <article>
          <span>
            Наименование:
          </span>
          {title}
        </article>
      </section>
    </>
  )
}
