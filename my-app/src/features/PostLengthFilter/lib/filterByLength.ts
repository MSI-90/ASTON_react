import type {IPost} from "../../../entities/post/model/types/Post.ts";

type filterReturn = IPost[] | [];

export function filterByLength(posts: IPost[], numberOfFilter: number): filterReturn {
  if (!Array.isArray(posts)) return [];
  return posts.filter((post) => post.title.length >= numberOfFilter);
}