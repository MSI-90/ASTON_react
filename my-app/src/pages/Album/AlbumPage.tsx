import {useParams} from "react-router-dom";
import {useGetAlbumsByUserIdQuery} from "../../entities/user/api/userApi.ts";
import {AlbumCard} from "../../entities/album/ui/AlbumCard.tsx";
import './AlbumPage.css';
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {albumSelector} from "../../entities/album/model/slice/albumSlice.ts";
import ItemList from "../../shared/ui/ItemList/ItemList.tsx";
import type {IAlbum} from "../../entities/album/model/types/Album.ts";

export default function AlbumPage() {
  const {id, section} = useParams();
  if (!id || !section)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  useGetAlbumsByUserIdQuery({userId: Number(id), section: section});

  const data = useAppSelector(albumSelector.selectAll);
  const loading = useAppSelector(state => state.album.loading);

  return (
    <>
      <ItemList<IAlbum>
        itemList={data}
        componentOnRender={AlbumCard}
        loading={loading}
        className={'post-list'}/>
    </>
  )
}