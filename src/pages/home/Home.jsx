import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import TopBar from "../../components/topBar/TopBar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./home.css";
import axios from "axios";

const dataFetch = async () => {
  try {
    await axios
      .get(
        "http://localhost:4000/api/getUserInfo",)
      .then((res) => {
        console.log(res)
      });
    } catch (error) {
    console.error(error);
  }
}

function Home() {

  dataFetch()


  return (
    <>
      <TopBar profilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2vVVG2BOns1aicnn0wKmKn3aYtHCcBiysWlpz_c&s"}/>
      <div className="homeContainer">
        <Sidebar  />
        <Feed />
      </div>
    </>
  );
}

export default Home;
