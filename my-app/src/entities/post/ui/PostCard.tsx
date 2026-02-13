import './PostCard.css';

interface IPostCard {
  id: number;
  title: string;
  body: string;
}

const PostCard = function PostCard(post: IPostCard){
  return (
    <>
      <div className="post-card">
        <span className="post-card__id">
          Post #{post.id}
        </span>
        <h3 className="post-card__title">
          {post.title}
        </h3>
        <p className="post-card__body">
          {post.body}
        </p>
      </div>
    </>
  )
}

export default PostCard;