
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import {useNavigate} from 'react-router-dom';
import TopBar from "../../components/topBar/TopBar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const {data} = await axios.get("http://localhost:4000/api/getUserInfo",{withCredentials: true})
        setData(data);
      } catch (error) {
        console.log(error)
      }
    }
    response()
  }, []);
 
  const {userId, profileImg, userName} = data;

  return (
    <>
      <TopBar userId={userId} profileImg={profileImg} userName={userName}/>
      <div className="homeContainer">
        <Sidebar  />
        <Feed profilePic={data.profileImg}/>
      </div>
    </>
  );
}

export default Home;
