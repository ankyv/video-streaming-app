import CommentContent from "./CommentContent";

const CommentReplies = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => (
        <CommentContent comment={comment} />
      ))}
    </div>
  );
};

export default CommentReplies;
