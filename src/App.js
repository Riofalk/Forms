import "./App.css";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./pages/userProfile/UserProfile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="UserProfile/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
