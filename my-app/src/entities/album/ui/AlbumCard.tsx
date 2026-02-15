import './AlbumCard.css';
import type {IAlbum} from "../model/types/Album.ts";

export function AlbumCard(props: IAlbum) {
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
