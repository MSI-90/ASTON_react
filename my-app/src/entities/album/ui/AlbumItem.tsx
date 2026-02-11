import './AlbumItem.css';

interface IAlbumItemParams {
  userId: number;
  id: number;
  title: string;
}

export function AlbumItem(props: IAlbumItemParams) {
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
