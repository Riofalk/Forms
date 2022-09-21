import "./App.css";
import Register from "./pages/register/Register.js";
import Login from "./pages/login/Login.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const dbConnect = require("./server/server.js");
dbConnect();
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
