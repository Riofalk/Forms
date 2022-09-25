import "./sidebar.css";
import { Feed } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Feed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Feed className="sidebarIcon" />
            <span className="sidebarListItemText">something else</span>
          </li>
          <li className="sidebarListItem">
            <Feed className="sidebarIcon" />
            <span className="sidebarListItemText">yeet</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
