import { DislikeIcon, LikeIcon } from "../icons";
import { getCount, getPublishTime } from "../utils/helper";
import { useState } from "react";
import { CommentReplies } from "./index";
import "../styles/CommentContent.css";

const CommentContent = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  // const channelId = comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value;
  const authorDisplayName = comment?.snippet?.authorDisplayName
    ? comment?.snippet?.authorDisplayName
    : comment?.snippet?.topLevelComment?.snippet?.authorDisplayName;

  const authorProfileImageUrl = comment?.snippet?.authorProfileImageUrl
    ? comment?.snippet?.authorProfileImageUrl
    : comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl;

  const likeCount = comment?.snippet?.likeCount
    ? getCount(comment?.snippet?.likeCount)
    : getCount(comment?.snippet?.topLevelComment?.snippet?.likeCount);

  const textOriginal = comment?.snippet?.textOriginal
    ? comment?.snippet?.textOriginal
    : comment?.snippet?.topLevelComment?.snippet?.textOriginal;

  const publishedAt = comment?.snippet?.publishedAt
    ? getPublishTime(comment?.snippet?.publishedAt)
    : getPublishTime(comment?.snippet?.topLevelComment?.snippet?.publishedAt);

  const totalReplyCount = getCount(comment?.snippet?.totalReplyCount);

  return (
    <div className="comment-content">
      <div className="channel-thumbnail">
        <div className="channel-thumbnail-image">
          <img src={authorProfileImageUrl} />
        </div>
      </div>
      <div className="comment-info">
        <div className="author-details">
          <h4>{authorDisplayName}</h4>
          <p>{publishedAt}</p>
        </div>
        <div className="comment-message">
          <p>{textOriginal}</p>
        </div>
        <div className="comment-stats">
          <button>
            <LikeIcon color={"var(--text-clr)"} />
          </button>
          <p>{likeCount}</p>
          <button>
            <DislikeIcon color={"var(--text-clr)"} />
          </button>
          <button className="reply-btn">Reply</button>
        </div>
        {comment?.replies && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="replies-btn"
          >
            ▼ {totalReplyCount} replies
          </button>
        )}
        {showReplies && (
          <CommentReplies comments={comment?.replies?.comments} />
        )}
      </div>
    </div>
  );
};

export default CommentContent;
