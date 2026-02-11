import {useParams} from "react-router-dom";
import {useGetPhotosByAlbumIdQuery} from "../../app/services/AlbumService.ts";
import type {IPhoto} from "../../entities/photos/Photos.ts";
import PhotoItem from "../../entities/photos/ui/PhotoItem.tsx";
import './PhotoPage.css';

export function PhotoPage() {
  const {id} = useParams();

  const {data, isLoading, error} = useGetPhotosByAlbumIdQuery({albumId: Number(id)});

  if ((Array.isArray(data) && data.length === 0))
    throw new Error("Нет ресурса");

  return (
    <>
      <div className={'photo-list'}>
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Is error here!!!</p>}
        {data && data.map((item: IPhoto) => (
          <PhotoItem key={crypto.randomUUID()} {...item} />
        ))}
      </div>
    </>
  )
}