import {useEffect, useState} from "react";
import CommentCard from "../../entities/comment/ui/CommentCard.tsx";
import type {IComment} from "../../entities/comment/Comment.ts";
import {useGetAllCommentsQuery} from "../../entities/comment/api/commentApi.ts";
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {commentSelectors} from "../../entities/comment/model/slice/commentSlice.ts";

export function CommentPage() {
  const [commentCount, setCommentCount] = useState<number>(0);

  useGetAllCommentsQuery({});

  const comments: IComment[] = useAppSelector(commentSelectors.selectAll);

  const loading = useAppSelector(state => state.comment.loading);
  const error = useAppSelector(state => state.comment.error);

  useEffect(()=>{
    setCommentCount(comments.length);
  },[comments])

  return (
    <>
      <div>
        <span>Всего комментариев: {commentCount} </span>
        {loading && <h1>Загрузка...</h1>}
        {error && <p>{error}</p>}
        {comments && (
          comments.map((item: IComment) => (
            <CommentCard {...item} key={crypto.randomUUID()}/>
          ))
        )}
      </div>
    </>
  )

}