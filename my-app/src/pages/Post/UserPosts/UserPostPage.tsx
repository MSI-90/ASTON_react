import {useParams} from "react-router-dom";
import {useGetPostsByUserIdQuery} from "../../../app/services/UserService.ts";
import type {IPost} from "../../../entities/post/Post.ts";
import PostCard from "../../../entities/post/ui/PostCard.tsx";

export default function UserPostPage() {
  const {id, section} = useParams();
  if (!id || !section)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  const {data, isLoading, error} =  useGetPostsByUserIdQuery({userId: Number(id), section: section});

  if ((Array.isArray(data) && data.length === 0))
    throw new Error("Нет ресурса");

  return(
    <>
      <div className={'post-list'}>
        {isLoading && <h1>Loading...</h1>}
        {error && <p>Is error here!!!</p>}
        {data &&
          data.map((item: IPost) => (
            <PostCard {...item} key={crypto.randomUUID()} />
          ))
        }
      </div>
    </>
  )
}