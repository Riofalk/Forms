import axios from "axios";
import React, { useState, useEffect } from "react";
import TopBar from "../../components/topBar/TopBar.jsx";
import UserProfileMain from "../../components/userProfileMain/UserProfileMain.jsx";


function UserProfile() {

  const [userData, setUserData] = useState([]);


  useEffect(() => {
    const response = async () => {
      try {
        const {data} = await axios.get("http://localhost:4000/api/getUserInfo",{withCredentials: true})
        setUserData(data);
      } catch (error) {
        console.log(error)
      }
    }
    response();
  }, []);

  const {userId, profileImg, userName} = userData;
  return (
    <>
      <TopBar profileImg={profileImg}/>
      <UserProfileMain profileImg={profileImg} userName={userName} userId={userId}/>
    </>
  );
}

export default UserProfile;
