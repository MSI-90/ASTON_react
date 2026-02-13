import {useParams} from "react-router-dom";
import {useGetAlbumsByUserIdQuery} from "../../entities/user/api/userApi.ts";
import {AlbumCard} from "../../entities/album/ui/AlbumCard.tsx";
import type {IAlbumUser} from "../../entities/album/Album.ts";
import './AlbumPage.css';

export default function AlbumPage() {
  const {id, section} = useParams();
  if (!id || !section)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  const {data, isLoading, error} =  useGetAlbumsByUserIdQuery({userId: Number(id), section: section});

  if ((Array.isArray(data) && data.length === 0))
    throw new Error("Нет ресурса");

  return (
    <>
      <div className={'post-list'}>
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Is error here!!!</p>}
        {data &&
          data.map((item: IAlbumUser) => (
                <AlbumCard  {...item} key={crypto.randomUUID()} />
            ))
        }
      </div>
    </>
  )
}