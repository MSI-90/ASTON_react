import PostCard from "../../entities/post/ui/PostCard.tsx";
import {posts, type IPostList} from './models/Post.ts';
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import {useState} from "react";

export default function PostList() {
  const minValue = posts[0].title.length;
  const [postList, setPostList] = useState(posts);

  const newPosts = (updatedPosts: IPostList[]) => {
    setPostList(updatedPosts);
  }

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