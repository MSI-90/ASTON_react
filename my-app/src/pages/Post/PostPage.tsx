import {useLoaderData} from "react-router-dom";
import type {IPost} from "../../entities/post/Post.ts";
import './PostPage.css';

export default function PostPage() {
  const post = useLoaderData() as IPost;
  return (
    <article className="post">
      <header className="post-header">
        <span className="post-id">#{post.id}</span>
        <h1 className="post-title">{post.title}</h1>
      </header>
      <p className="post-body">{post.body}</p>
    </article>
  );
}