import "./topBar.css";
import { Search, Twitter } from "@mui/icons-material";

function TopBar(props) {
  const {profilePic} = props
  
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Twitter className="logoIcon" />
        <span className="logo">Twitter</span>
      </div>
      {/* <div className="topbarCenter"></div> */}
      <div className="topbarRight">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search..." className="searchInput" />
        </div>
        <div className="profileImgContainer">
          <img src={profilePic} alt="" className="profileLinkImg" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
