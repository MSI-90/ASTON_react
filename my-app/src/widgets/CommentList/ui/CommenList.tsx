import {useEffect, useState, useCallback} from 'react';
import comments from '../tetsData/Comments.ts';
import CommentCard from "../../../entities/comment/ui/CommentCard.tsx";

export default function CommentList() {
  const [comment, setComment] = useState<Array>([]);
  const [commentCount, setCommentCount] = useState<number>(0);

  const commentsList = useCallback(() => {
    if (!Array.isArray(comments) || comments.length === 0) return [];
    return(comments);
  }, []);

  const getCommentCount = useCallback(() => {
    const commentsListInit = commentsList();

    if (!Array.isArray(commentsListInit) || commentsListInit.length === 0) return 0;

    setComment(commentsListInit);
    return commentsListInit.length;
  }, [commentsList])

  useEffect(() => {
    return () => {
      const commentsCount = getCommentCount();
      setCommentCount(commentsCount);
    }
  });

  return (
    <>
      <div>
        <span>Всего комментариев: {commentCount} </span>
        {comment && (
          comment.map((item: IComment , index: number)  => (
            <CommentCard props={item} key={index}/>
          ))
        )}

      </div>
    </>
  )

}