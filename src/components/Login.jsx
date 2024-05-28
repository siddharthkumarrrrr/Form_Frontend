
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
    <div className="flex flex-col lg:grid lg:grid-cols-12 h-screen">
    <div className="lg:col-span-6 lg:h-screen p-2 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <img src={img} alt="img" className="w-full h-auto mb-4 lg:mb-0" />
        </div>
      </div>

      <div className="lg:col-span-6 flex justify-center items-center">
        <div className="login-form p-8 w-full max-w-md">
          <h1 className="underline text-blue-500 mb-6 text-2xl" id="admin">Login</h1>
          <form>
            <div className="input-box mb-4">
              <label className="block text-gray-700 mb-2">Email Id</label>
              <span className="input-item w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </span>
            </div>

            <div className="input-box mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="input-item w-full flex items-center border border-gray-300 rounded">
                <input
                  type={passwordType}
                  value={passwordInput}
                  name="password"
                  placeholder="Enter Your Password"
                  onChange={passwordHandler}
                  className="w-full p-2"
                  required
                />
                <span className="p-2 cursor-pointer" onClick={toggleEye}>
                  {passwordType === "text" ? (
                    <AiFillEye color={"#a7a7a7"} size={"20px"} />
                  ) : (
                    <AiFillEyeInvisible color={"#a7a7a7"} size={"20px"} />
                  )}
                </span>
              </div>
            </div>

            <button className="loginButton bg-blue-500 text-white p-2 w-full rounded" name="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
};

export default Login;