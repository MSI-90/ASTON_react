import {useParams} from "react-router-dom";
import {useGetAlbumsByUserIdQuery} from "../../app/services/UserService.ts";

export default function AlbumPage() {
    const {id} = useParams();
    const {data, isLoading, error} =  useGetAlbumsByUserIdQuery({id: Number(id), section: 'albums'});

    if (Array.isArray(data) && data.length === 0) throw new Error("Нет ресурса");

    return (
        <>
            <div>
                {isLoading && <h1>Loading...</h1>}
                {error && <p>Ошибка!!!</p>}
                {data &&
                    data.map(item => (
                        <div key={item.id}>{item.title}</div>
                    ))
                }
            </div>
        </>
    )
}