import "./sidebar.css";
import { Feed } from "@mui/icons-material";
import MiniProfile from "../miniProfile/MiniProfile";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h1 className="recProfiles">Recomended Users:</h1>
        <div className="followSuggestion">
          <MiniProfile />
          <MiniProfile />
          <MiniProfile />
          <MiniProfile />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
