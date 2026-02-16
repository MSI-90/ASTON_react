import {useParams} from "react-router-dom";
import {useGetPhotosByAlbumIdQuery} from "../../entities/album/api/albumsApi.ts";
import type {IPhoto} from "../../entities/photos/model/types/Photos.ts";
import PhotoCard from "../../entities/photos/ui/PhotoCard.tsx";
import './PhotoPage.css';
import {useAppDispatch, useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {photoSelector, setCurrentAlbumId} from "../../entities/photos/model/photoSlice.ts";
import ItemList from "../../shared/ui/ItemList/ItemList.tsx";

export function PhotoPage() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  if (id)
    dispatch(setCurrentAlbumId(Number(id)));


  useGetPhotosByAlbumIdQuery({albumId: Number(id)});

  const photos:IPhoto[] = useAppSelector(photoSelector.selectAll);
  const loading: boolean = useAppSelector(state => state.photo.loading);
  const error: boolean = useAppSelector(state => state.photo.error);
  const currentAlbumId: number = useAppSelector(state => state.photo.currentAlbumId);

  return (
    <>
      <ItemList<IPhoto>
        itemList={photos}
        componentOnRender={PhotoCard}
        loading={loading}
        error={error} className={'photo-list'}
        currentItemId={currentAlbumId} />
    </>
  )
}