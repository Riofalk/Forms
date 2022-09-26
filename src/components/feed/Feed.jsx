import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import React, {useState, useEffect} from "react";
import axios from "axios";

function Feed(profileImg) {

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const {data} = await axios.get("http://localhost:4000/api/getUserInfo",{withCredentials: true})
        setTweets(data);
      } catch (error) {
        console.log(error)
      }
    }
    response()
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share profileImg={profileImg} />
        {tweets?.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
