import type {IPhoto} from "../Photos.ts";
import './PhotoCard.css';

export default function PhotoCard (props: IPhoto) {
  const {albumId, id, title, url, thumbnailUrl} = props;

  return (
    <>
      <section className={'photo-item'}>
        <article>
          <span>Идентификатор альбома: </span>
          {albumId}
        </article>
        <article>
          <span>Идентификатор изображения: </span>
          {id}
        </article>
        <article>
          <span>Наименование изображения: </span>
          {title}
        </article>
        <article>
          <span>Путь к изображению в сети интернет: </span>
          <a href ={url}> Изображение </a>
        </article>
        <article>
          <span>Миниатюра изображения: </span>
          <a href={thumbnailUrl}> Миниатюра изображения </a>
        </article>
      </section>
    </>
  )
}