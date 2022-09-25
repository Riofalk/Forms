import "./share.css";
import { InsertPhoto, Label, Room, EmojiEmotions } from "@mui/icons-material";
import placeholderImg from "../../img/placeholderProfileImg.png";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={placeholderImg}
            alt="Img of user"
          />
          <input placeholder="What's happening?" className="shareInput" />
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
          <button className="shareButton">Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
