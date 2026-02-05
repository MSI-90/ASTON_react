import {type IPostList} from '../../../widgets/PostList/models/Post.ts';

type filterReturn = IPostList[] | [];

export function filterByLength(posts: IPostList[], numberOfFilter: number): filterReturn {
  if (!Array.isArray(posts)) return [];
  const updatedPosts = posts.filter((post) => post.title.length >= numberOfFilter);
  console.log(updatedPosts);
  return updatedPosts;
}