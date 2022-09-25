import { useRef, useState} from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import { Twitter } from "@mui/icons-material";


const Login = () => {
  return (
    <div className="wrapper">
      <div className="register-left">
        <div className="chirperRegister">
          <Twitter className="logoIcon" />
        </div>
        <div className="register-left-text">
          Find out <br /> what's happening first...
        </div>
      </div>
      <div className="register-right">
        <section className="loginContainer">
          <h1 className="loginHeader">Log in</h1>
          <LoginForm/>
          <p>
            <br />
            <span className="line">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};


function LoginForm()  {
  const navigate = useNavigate(); 
  const userRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
    {error && <div className="errmsg">Invalid username or password</div>}
    <form className="loginForm">
      <label className="logingInLabel" htmlFor="username">Username:</label>
      <input
        className="logingInInput"
        autoFocus
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
      />
      <label className="logingInLabel" htmlFor="password">Password:</label>
      <input
        className="logingInInput"
        type="password"
        id="password"
        onChange={(e) => setPwd(e.target.value)}
        value={pwd}
        required
      />
      <button
        onClick={() => {
          HandleSubmit(user, pwd).then((res) => {
            res ? navigate("/home") : setError(!res) 
          })
        }}
        type="button"
        className="logingInButton"
      >Log In</button>
    </form>
    </>
  )
}

async function HandleSubmit(user, pwd) {
  let loggedIn = false;
  try {
    await axios
      .post(
        "http://localhost:4000/api/login",
        {
          userId: user,
          password: pwd,
        },
        { withCredentials: true }
      )
      .then((res) => {
        loggedIn = (res.status === 201)
      });
    } catch (error) {
    console.error(error);
  }
  return loggedIn;
}







export default Login;
