import './PostPage.css';
import {useParams} from "react-router-dom";
import {useGetPostByIdQuery} from "../../entities/post/api/postsApi.ts";

export default function PostPage() {
  const {id} = useParams();
  const {data, isLoading, error} = useGetPostByIdQuery({id:Number(id)})

  return (
    <article className="post">
      {isLoading && <h1>Загрузка данных...</h1>}
      {error && <h1>Ошибка при загрузке данных...</h1>}
      <header className="post-header">
        <span className="post-id">#{data?.id}</span>
        <h1 className="post-title">{data?.title}</h1>
      </header>
      <p className="post-body">{data?.body}</p>
    </article>
  );
}