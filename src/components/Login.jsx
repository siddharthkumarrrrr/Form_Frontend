
import React, { useState } from "react";
import './Login.css'
import img from '/images.jpg';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const toggleEye = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else if (passwordType === "text") {
      setPasswordType("password");
    }
  };
  const passwordHandler = (e) => {
    setPasswordInput(e.target.value);
  };
  return (
    <>
      <div id="login-container">
        <div className="left p-2">
          <img src={img} alt="img" className="w-full h-auto" />
        </div>
        <div className="right">
          <div className="login-form">
            <h1  className="underline text-blue-500" id="admin">Login</h1>
            <form>
              <div className="input-box">
                <label>Email Id</label>

                <span className="input-item">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    required
                  />
                </span>
              </div>

              <div className="input-box">
                <label> Passsword</label>
                <div className="input-item">
                  <input
                    type={passwordType}
                    value={passwordInput}
                    name="password"
                    placeholder=" Enter Your Password"
                    onChange={passwordHandler}
                    required
                    
                  />
                    <span onClick={toggleEye}>
                    {passwordType === "text" ? (
                      <AiFillEye color={"#a7a7a7"} size={"20px"} />
                    ) : (
                      <AiFillEyeInvisible color={"#a7a7a7"} size={"20px"} />
                    )}
                  </span>
                
                </div>
              </div>

              <button  className="loginButton" name="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
