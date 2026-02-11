import PostCard from "../../entities/post/ui/PostCard.tsx";
import {posts} from './testData/Post.ts';
import type {IPost} from '../../entities/post/Post.ts';
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import {useCallback, useMemo, useState} from "react";

export default function PostList() {
  const firstPostLength = posts[0].title.length;
  
  const minValue = useMemo(() => {
    return firstPostLength;
  }, [firstPostLength]);
  
  const [postList, setPostList] = useState(posts);

  const newPosts = useCallback((updatedPosts: IPost[]) => {
    setPostList(updatedPosts);
  }, [])

  return (
    <>
      <div>
        <PostLengthFilter
          labelPreview={'Фильтрация по длине заголовка'}
          minValue={minValue}
          originalPosts={posts}
          onPostChange={newPosts}
        />
        {postList.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  )
}
