import {useUserPosts} from "../../features/PostList/models/hooks/PostHooks.ts";
import {useParams} from "react-router-dom";
import PostCard from "../../entities/post/ui/PostCard.tsx";

interface IPostCard {
  id: number;
  title: string;
  body: string;
}

export default function CustomPage() {
  const {id} = useParams();
  if (!id)
    throw new Error("Возникла ошибка, ответственные уже занимаются решением вопроса.");

  const {posts} = useUserPosts(1);

  return (
    <>
      <section>
        {posts.map((item: IPostCard) => (
          <PostCard {...item} />
        ))}
      </section>
    </>
  )
}