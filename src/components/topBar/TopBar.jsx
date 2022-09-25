import "./topBar.css";
import { Search, Twitter } from "@mui/icons-material";

function TopBar(profilePic) {
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
          <img src="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png" alt="" className="profileLinkImg" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
