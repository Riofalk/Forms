import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData.js";

function Feed(profileImg) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share profileImg={profileImg} />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
