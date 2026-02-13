import {useParams} from "react-router-dom";
import {useGetPhotosByAlbumIdQuery} from "../../entities/album/api/albumsApi.ts";
import type {IPhoto} from "../../entities/photos/Photos.ts";
import PhotoCard from "../../entities/photos/ui/PhotoCard.tsx";
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
          <PhotoCard key={crypto.randomUUID()} {...item} />
        ))}
      </div>
    </>
  )
}