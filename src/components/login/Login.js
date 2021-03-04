import React, { useState } from "react";
import { useSetUser } from "./useSetUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./login.css";
import signinImg from "../images/todo2.svg";
import signupImg from "../images/todo8.svg";

function Login() {
  const [className, setClassName] = useState("");
  const { signIn } = useSetUser();

  return (
    <div className={`container ${className}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="submit" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <p className="forgot-pswrd" >Forgot Password?</p>
            <input type="submit" value="Login" className="btn solid" />
            
            <p className="social-text">Or continue with a platform</p>
            <div className="social-media">
              <button onClick={signIn} className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or continue with a platform</p>
            <div className="social-media">
              <button onClick={signIn} className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Organise yourself by keeping track of your daily tasks and get
              the satisfaction of completion!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => setClassName("sign-up-mode")}
            >
              Sign up
            </button>
          </div>
          <img src={signinImg} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              What are you waiting for? Lets see what you have to do today. Get
              Crackin!
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => setClassName("")}
            >
              Sign in
            </button>
          </div>
          <img src={signupImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
