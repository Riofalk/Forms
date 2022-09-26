import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import React, {useState, useEffect} from "react";
import axios from "axios";

function Feed({_id}) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const {data} = await axios.get("http://localhost:4000/api/getAllTweets",{withCredentials: true})
        setTweets(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchTweets()
    
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share _id={_id}/>
        {tweets.map((props, index) => (
          <Post key={index} props={props} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
