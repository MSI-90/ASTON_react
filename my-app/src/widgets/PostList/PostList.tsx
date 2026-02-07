import PostCard from "../../entities/post/ui/PostCard.tsx";
import {posts, type IPostList} from './testData/Post.ts';
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import {useCallback, useMemo, useState} from "react";

export default function PostList() {
  const firstPostLength = posts[0].title.length;
  
  const minValue = useMemo(() => {
    return firstPostLength;
  }, [firstPostLength]);
  
  const [postList, setPostList] = useState(posts);

  const newPosts = useCallback((updatedPosts: IPostList[]) => {
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
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
