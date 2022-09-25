import { useRef, useState, useEffect } from "react";
import "./register.css";
import axios from "axios";
import Usernameuid from "../../components/register/username/Usernameuid.js";
import PasswordNote from "../../components/register/password/PasswordNote.js";
import ConfirmPasswordNote from "../../components/register/confirmPassword/ConfirmPasswordNote.js";
import SignUpButton from "../../components/register/signUpButton/SignUpButton.js";
import FormFooter from "../../components/register/formFooter/FormFooter.js";
import UsernameLabel from "../../components/register/username/UsernameLabel.js";
import PasswordLabel from "../../components/register/password/PasswordLabel.js";
import ConfirmPasswordLabel from "../../components/register/confirmPassword/ConfirmPasswordLabel.js";
import ErrMsg from "../../components/register/errMsg/ErrMsg.js";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    try {
      await axios
        .post(
          "http://localhost:4000/api/register",
          {
            userName: user.toLowerCase(),
            password: pwd,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.status);
        });
      setRegisterSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      <section className="registrationContainer">
        <ErrMsg errMsg={errMsg} />
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <UsernameLabel validName={validName} user={user} />
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <Usernameuid
            userFocus={userFocus}
            user={user}
            validName={validName}
          />

          <PasswordLabel validPwd={validPwd} pwd={pwd} />
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <PasswordNote pwdFocus={pwdFocus} validPwd={validPwd} />

          <ConfirmPasswordLabel validMatch={validMatch} matchPwd={matchPwd} />
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <ConfirmPasswordNote
            matchFocus={matchFocus}
            validMatch={validMatch}
          />

          <SignUpButton
            validName={validName}
            validPwd={validPwd}
            validMatch={validMatch}
            registerSuccess={registerSuccess}
          />
        </form>
        <FormFooter />
      </section>
    </div>
  );
};

export default Register;
