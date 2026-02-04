import PostCard from "../../entities/post/ui/PostCard.tsx";

const posts = [
    { id: 1, title: 'Первый пост', body: 'Текст поста' },
    { id: 2, title: 'Второй пост', body: 'Ещё текст' }
]

export default function PostList() {
    return (
        <>
            <div>
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    )
}