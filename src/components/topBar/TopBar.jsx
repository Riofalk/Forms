import "./topBar.css";
import { Search, Twitter } from "@mui/icons-material";
import {Routes, Route, useNavigate} from 'react-router-dom';

function TopBar(passedValues) {
  const {userId, profileImg} = passedValues
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate(`/UserProfile/${userId}`);
  };

  const navigateToMain = () => {
    navigate('/Home');
  };
  
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Twitter className="logoIcon" />
        <span onClick={ () => navigateToMain()} className="logo">Twitter</span>
      </div>
      {/* <div className="topbarCenter"></div> */}
      <div className="topbarRight">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search..." className="searchInput" />
        </div>
        <div className="profileImgContainer">
          <img onClick={ () => navigateToProfile()} src={"profilePic"} alt="" className="profileLinkImg" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
