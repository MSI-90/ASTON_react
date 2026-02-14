import {useParams} from "react-router-dom";
import {useGetAlbumsByUserIdQuery} from "../../entities/user/api/userApi.ts";
import {AlbumCard} from "../../entities/album/ui/AlbumCard.tsx";
import type {IAlbum} from "../../entities/album/Album.ts";
import './AlbumPage.css';
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {albumSelector} from "../../entities/album/model/slice/albumSlice.ts";

export default function AlbumPage() {
  const {id, section} = useParams();
  if (!id || !section)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  useGetAlbumsByUserIdQuery({userId: Number(id), section: section});

  const data = useAppSelector(albumSelector.selectAll);
  const loading = useAppSelector(state => state.album.loading);

  return (
    <>
      <div className={'post-list'}>
        {loading && <h1>Загрузка...</h1>}
        {data.length === 0 && <p>Нет данных</p>}
        {data &&
          data.map((item: IAlbum) => (
                <AlbumCard  {...item} key={crypto.randomUUID()} />
            ))
        }
      </div>
    </>
  )
}