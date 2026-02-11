import {useParams} from "react-router-dom";
import {useGetAlbumsByUserIdQuery} from "../../app/services/UserService.ts";
import {AlbumItem} from "../../entities/album/ui/AlbumItem.tsx";
import type {IAlbumUser} from "../../entities/album/Album.ts";
import './AlbumPage.css';

export default function AlbumPage() {
  const {id} = useParams();
  const {data, isLoading, error} =  useGetAlbumsByUserIdQuery({id: Number(id), section: 'albums'});

  if ((Array.isArray(data) && data.length === 0))
    throw new Error("Нет ресурса");

  return (
    <>
      <div className={'post-list'}>
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Ошибка!!!</p>}
        {data &&
          data.map((item: IAlbumUser) => (
                <AlbumItem  {...item} key={crypto.randomUUID()} />
            ))
        }
      </div>
    </>
  )
}