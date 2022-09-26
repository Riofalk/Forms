import "./topBar.css";
import { Search, Twitter } from "@mui/icons-material";
import { Routes, Route, useNavigate } from "react-router-dom";

function TopBar(data) {
  const {userId, profileImg} = data;
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate(`/UserProfile/${userId}`);
  };

  const navigateToMain = () => {
    navigate("/Home");
  };

  const navigateToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Twitter className="logoIcon" />
        <span onClick={() => navigateToMain()} className="logo">
          Twitter
        </span>
      </div>
      {/* <div className="topbarCenter"></div> */}
      <div className="topbarRight">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search..." className="searchInput" />
        </div>
        <button onClick={() => navigateToLogin()} className="logOutHeader">
          Log out
        </button>
        <div className="profileImgContainer">
          <img
            onClick={() => navigateToProfile()}
            src={profileImg}
            alt=""
            className="profileLinkImg"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
