import "./share.css";
import { InsertPhoto, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

function Share({_id}) {
  const [tweetText, setTweetText] = useState("");

  const tweetSubmit = async (e) => {
    try {
      await axios.post(
        `http://localhost:4000/api/tweet/${_id}`,
        {
          tweetBy: _id,
          body: tweetText,
        },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error)
      console.log("Something went wrong");
    }
    window.location.reload(true);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <input
            placeholder="What's happening?"
            className="shareInput"
            onChange={(e) => setTweetText(e.target.value)}
          />
          {console.log(tweetText)}
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <InsertPhoto htmlColor="#ebebeb" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="#ebebeb" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="#ebebeb" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="#ebebeb" className="shareIcon" />
              <span className="shareOptionText">Emoji</span>
            </div>
          </div>
          <button onClick={tweetSubmit} className="shareButton">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
