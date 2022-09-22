import "./App.css";
import Register from "./pages/register/Register.js";
import Login from "./pages/login/Login.js";
import Main from "./pages/main/Main.js";
import Forms from "./pages/forms/Forms.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App;
