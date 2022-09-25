import "./post.css";
import placeholderImg from "../../img/placeholderProfileImg.png";
import placeholderPostImg from "../../img/placeholderPostImg.png";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={placeholderImg} className="postProfileImg" />
            <span className="postUsername">Stick Stickmanson</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">First post W00t!!!! ;))</div>
          <img src={placeholderPostImg} className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp tabindex="1" className="likeIcon" />
            <Favorite tabindex="2" className="likeIcon" />
            <span className="postlikeCounter">32 people like this post</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
