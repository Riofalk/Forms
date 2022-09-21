import "./App.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
