import {useParams} from "react-router-dom";
import {useGetPostsByUserIdQuery} from "../../../entities/user/api/userApi.ts";
import type {IPost} from "../../../entities/post/model/types/Post.ts";
import PostCard from "../../../entities/post/ui/PostCard.tsx";
import {useAppSelector} from "../../../app/providers/store/hooks/ReduxHooks.ts";
import {postSelectors} from "../../../entities/post/model/slice/postSlice.ts";

export default function UserPostPage() {
  const {id, section} = useParams();
  if (!id || !section)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  useGetPostsByUserIdQuery({userId: Number(id), section: section});

  const data: IPost[] = useAppSelector(postSelectors.selectAll);
  const loading: boolean = useAppSelector(state => state.post.loading);

  return(
    <>
      <div className={'post-list'}>
        {loading && <h1>Загрузка...</h1>}
        {data.length === 0 && <p>Нет данных</p>}

        {data &&
          data.map((item: IPost) => (
            <PostCard {...item} key={crypto.randomUUID()} />
          ))
        }
      </div>
    </>
  )
}