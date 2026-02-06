import './CommentCard.css';
import {useState} from "react";

interface ICommentCard {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function CommentCard({props}: ICommentCard) {
  const [open, setOpen] = useState(false);
  const {
    postId,
    id,
    name,
    email,
    body
  } = props;

  return (
    <div className="comment-card">
      <div className="comment-header" onClick={() => setOpen(prev => !prev)}>
        <div className="comment-header-left">
          <span className="comment-author">{name}</span>
          <span className="comment-email">{email}</span>
        </div>
        <div className={`chevron ${open ? "open" : ""}`}></div>
      </div>

      {open &&
        <p className="comment-body">{body}</p>
      }

      <div className="comment-meta">
        <span>Comment #{id}</span>
        <span>Post #{postId}</span>
      </div>
    </div>
  );
}