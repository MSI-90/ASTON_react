import './PostPage.css';
import {useParams} from "react-router-dom";
import {useGetPostByIdQuery} from "../../entities/post/api/postsApi.ts";
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {postSelectors} from "../../entities/post/model/slice/postSlice.ts";

export default function PostPage() {
  const {id} = useParams();
  useGetPostByIdQuery({id:Number(id)})

  const post = useAppSelector(state =>
    postSelectors.selectById(state, Number(id)));

  const loading = useAppSelector(state => state.post.loading);
  const error = useAppSelector(state => state.post.error);

  return (
    <article className="post">
      {loading && <h1>Загрузка данных...</h1>}
      {error && <h1>Ошибка при загрузке данных...</h1>}
      <header className="post-header">
        <span className="post-id">#{post?.id}</span>
        <h1 className="post-title">{post?.title}</h1>
      </header>
      <p className="post-body">{post?.body}</p>
    </article>
  );
}