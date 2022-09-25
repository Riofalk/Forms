import "./App.css";
import Profile from "./pages/profile/Profile.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="profile" element={<Profile/>} />
    </Routes>
  </Router> 
  )

}

export default App;
