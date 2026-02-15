import {useParams} from "react-router-dom";
import {useGetPhotosByAlbumIdQuery} from "../../entities/album/api/albumsApi.ts";
import type {IPhoto} from "../../entities/photos/model/types/Photos.ts";
import PhotoCard from "../../entities/photos/ui/PhotoCard.tsx";
import './PhotoPage.css';
import {useAppDispatch, useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {photoSelector, setCurrentAlbumId} from "../../entities/photos/model/photoSlice.ts";

export function PhotoPage() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  if (id)
    dispatch(setCurrentAlbumId(Number(id)));


  useGetPhotosByAlbumIdQuery({albumId: Number(id)});

  const photos:IPhoto[] = useAppSelector(photoSelector.selectAll);
  const loading: boolean = useAppSelector(state => state.photo.loading);
  const error: boolean = useAppSelector(state => state.photo.error);
  const currentAlbumId = useAppSelector(state => state.photo.currentAlbumId);

  return (
    <>
      <div className={'photo-list'}>
        <h3>Текущий альбом: {currentAlbumId}</h3>
        {loading && <h1>Загрузка...</h1>}
        {error && <p>Ошибка!!!</p>}
        {photos.length === 0 && <p>Нет данных для отображения...</p>}
        {photos && photos.map((item: IPhoto) => (
          <PhotoCard key={crypto.randomUUID()} {...item} />
        ))}
      </div>
    </>
  )
}