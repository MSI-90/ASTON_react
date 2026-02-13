import {useGetAllPostsQuery} from "../../../entities/post/api/postsApi.ts";
import {useMemo, useState} from "react";
import type {IPost} from "../../../entities/post/Post.ts";
import PostLengthFilter from "../../../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import PostCard from "../../../entities/post/ui/PostCard.tsx";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../app/providers/store/hooks/ReduxHooks.ts";
import {postSelectors} from "../../../entities/post/model/slice/postSlice.ts";

export default function PostListPage() {
  const [searchParams] = useSearchParams();

  type limitType = number | undefined
  const limit:limitType = Number(searchParams.get('_limit')) || 10;

  useGetAllPostsQuery({limit});

  const posts = useAppSelector(postSelectors.selectAll);
  const loading = useAppSelector(state => state.post.loading);
  const error = useAppSelector(state => state.post.error);

  const [minLength, setMinLength] = useState(0);

  const filteredPosts:IPost[] = useMemo(() => {
    return posts.filter((post:IPost) => post.title.length >= minLength);
  }, [posts, minLength]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Ошибка</p>;

  return (
    <>
      <div>
        <PostLengthFilter
          labelPreview="Фильтрация по длине заголовка"
          minValue={0}
          onChange={setMinLength}
        />

        {filteredPosts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  )
}