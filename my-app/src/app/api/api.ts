import type {LoaderFunctionArgs} from "react-router-dom";
import type {IPost} from "../../widgets/PostList/testData/Post.ts";
import {posts} from '../../widgets/PostList/testData/Post.ts';

export function getPostById({params}:LoaderFunctionArgs): IPost | null {
  const postId = params.id;
  if (typeof postId === 'undefined') return null;

  const requestedPost: IPost | undefined = posts.find((post: IPost) => post.id === parseInt(postId));
  if (!requestedPost) return null;

  return requestedPost;
}