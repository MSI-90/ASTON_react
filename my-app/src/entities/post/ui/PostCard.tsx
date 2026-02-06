import './PostCard.css';

interface IPostCard {
    post: {
        id: number;
        title: string;
        body: string;
    }
}

const PostCard = function PostCard({post}: IPostCard){
    return (
        <>
            <div className={'post__card'}>
                <p>{post.id}.</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>
        </>
    )
}

export default PostCard;