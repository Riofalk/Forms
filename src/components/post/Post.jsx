import "./post.css";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";


function Post({props}) {
  const {body, profileImg, userId, likedBy} = props
  const [like, setLike] = useState(likedBy.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={profileImg}
              className="postProfileImg"
            />
            <span className="postUsername">
              {userId}
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{body}</div>
        </div>
        <hr className="postHr" />
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp tabIndex="1" className={[isLiked ? "likeIcon-clicked": "", "likeIcon"]} onClick={likeHandler} />
            <span className="postlikeCounter">
               {like} people have liked this
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;