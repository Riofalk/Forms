import "./post.css";
import placeholderImg from "../../img/placeholderProfileImg.png";
import placeholderPostImg from "../../img/placeholderPostImg.png";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
import { Users } from "../../dummyData.js";
import { useState } from "react";

function Post(post) {
  console.log(post)
  const [like, setLike] = useState(post.like);
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
              src={""}
              className="postProfileImg"
            />
            <span className="postUsername">
              Hello
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText"></div>
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