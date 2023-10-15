import CommentContent from "./CommentContent";
import "../styles/CommentReplies.css";

const CommentReplies = ({ comments }) => {
  return (
    <div className="comment-replies">
      {comments?.map((comment) => (
        <CommentContent comment={comment} />
      ))}
    </div>
  );
};

export default CommentReplies;
