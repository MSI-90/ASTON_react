import CommentCard from "../../entities/comment/ui/CommentCard.tsx";
import type {IComment} from "../../entities/comment/model/types/Comment.ts";
import {useGetAllCommentsQuery} from "../../entities/comment/api/commentApi.ts";
import {useAppSelector} from "../../app/providers/store/hooks/ReduxHooks.ts";
import {commentSelectors} from "../../entities/comment/model/slice/commentSlice.ts";
import ItemList from "../../shared/ui/ItemList/ItemList.tsx";

export function CommentPage() {

  useGetAllCommentsQuery({});

  const comments: IComment[] = useAppSelector(commentSelectors.selectAll);

  const loading = useAppSelector(state => state.comment.loading);
  const error = useAppSelector(state => state.comment.error);

  return (
    <>
      <ItemList<IComment>
        itemList={comments}
        componentOnRender={CommentCard}
        loading={loading}
        error={error}
        className={'post-list'}/>
    </>
  )
}