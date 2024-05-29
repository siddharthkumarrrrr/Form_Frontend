import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css'
import img from '/images.jpg';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [inputdata, setInputData] = useState({
    email:'',
    password:'',
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInput) => ({
      ...prevInput,
      [name]: value, 
    }));
  }

  const toggleEye = () => {
    setPasswordType((prevType) => prevType === "password" ? "text" : "password" );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputdata);
    try {
        const response = await fetch('https://from-backend.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputdata) // Assuming inputdata is defined
        });

        const result = await response.json();
        if (response.ok) {
            // Token received successfully
            alert('Login successful!');
            localStorage.setItem('token', result.token);

            // Call verify-token API to ensure token validity
            const verifyResponse = await fetch('https://from-backend.onrender.com/auth/verify-token', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${result.token}`
                }
            });

            const verifyResult = await verifyResponse.json();
            if (verifyResponse.ok) {
                // Token is valid, redirect to protected page
                navigate('/protected-page');
            } else {
                // Token is invalid or expired
                alert(`Token verification failed: ${verifyResult.message}`);
            }
        } else {
            // Error in login
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
};



  return (
    <>
    <Navbar/>
      <div className="flex flex-col lg:grid lg:grid-cols-12 h-screen">
        <div className="lg:col-span-6 lg:h-screen p-2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <img src={img} alt="img" className="w-full h-auto mb-4 lg:mb-0" />
          </div>
        </div>
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="login-form p-8 w-full max-w-md">
            <h1 className="underline text-blue-500 mb-6 text-2xl" id="admin">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-box mb-4">
                <label className="block text-gray-700 mb-2">Email Id</label>
                <span className="input-item w-full">
                  <input
                    type="email"
                    name="email"
                    value={inputdata.email}
                    onChange={inputChange}
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
                    name="password"
                    value={inputdata.password}
                    onChange={inputChange}
                    placeholder="Enter Your Password"
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
              <button className="loginButton bg-blue-500 text-white p-2 w-full rounded" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
