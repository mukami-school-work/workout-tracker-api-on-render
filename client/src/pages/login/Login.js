import { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faGoogle,
//   faLinkedin,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import login from "./images/rocket.svg";
import register from "./images/press-play.svg";
import { default as Error } from './styles/Error';

function Login({onLogin}) {
  const [signupMode, setSignupMode] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const signupBtn = (e) => {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });

      setSignupMode("sign-up-mode");
    };

    const signinBtn = (e) => {

      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
      setSignupMode("");
    };

  return (
    <div className={"app" + " " + signupMode}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={signinBtn} className="sign-in-form">
            <h2 className="titles">Sign in</h2>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>

              <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <div>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
                // <Error key={err}>{err}</Error>
              ))}
            </div>
          </form>

          <form onSubmit={signupBtn} className="sign-up-form">
            <h2 className="titles">Sign up</h2>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input type="email" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />
            <div>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
                // <Error key={err}>{err}</Error>
              ))}
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Please register an account for you to access the workout tracker.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={signupBtn}
            >
              Sign up
            </button>
          </div>
          <img src={login} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Hello There!? Login to add more workout into your todo and keep track.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={signinBtn}
            >
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;