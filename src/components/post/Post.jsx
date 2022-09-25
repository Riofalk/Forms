import "./post.css";
import placeholderImg from "../../img/placeholderProfileImg.png";
import placeholderPostImg from "../../img/placeholderPostImg.png";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
import { Users } from "../../dummyData.js";
function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.desc}</div>
          <img
            src={post.photo}
            className="postImg"
            alt="this works there's just no photos"
          />
        </div>
        <hr className="postHr" />
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp tabindex="1" className="likeIcon" />
            <Favorite tabindex="2" className="likeIcon" />
            <span className="postlikeCounter">
              {post.like} people have liked this
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
