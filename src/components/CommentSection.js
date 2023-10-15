import { useState, useEffect } from "react";
import { CommentContent } from "./index";
import "../styles/CommentSection.css";

const CommentSection = ({ id, commentCount }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getComments();
  }, [id]);

  async function getComments() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=25&key=${process.env.API_KEY}&videoId=${id}`
    );
    const json = await response.json();
    setComments(json);
  }

  return (
    <div className="comment-section">
      <div className="comment-stats">
        <h2>Comments</h2>
        <p>{commentCount}</p>
      </div>
      {comments?.items?.map((comment) => (
        <CommentContent key={comment?.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
