import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
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
    response();
  }, []);


  return (
    <>
      <TopBar profilePic={data.profileImg}/>
      <div className="homeContainer">
        <Sidebar  />
        <Feed profilePic={data.profileImg}/>
      </div>
    </>
  );
}

export default Home;
