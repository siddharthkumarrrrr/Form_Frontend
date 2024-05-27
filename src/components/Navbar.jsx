import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(){
    const [activeButton, setActiveButton] = useState('register');

    const handleClick = (button) => {
        setActiveButton(button);
    };

    return (
        <>
            <nav className="nav w-screen bg-slate-100 grid grid-cols-12">
                <div className={`register col-span-3 ${activeButton === 'register' ? 'active' : ''}`}>
                    <Link to='/'>
                        <button onClick={()=> handleClick('register') } className={`w-full border-2 border-r-21`}>Register</button>
                    </Link>
                </div>
                <div className={`login col-span-3 ${activeButton === 'login' ? 'active' : ''}`}>
                    <Link to='/login'>
                        <button onClick={()=>handleClick('login')} className="w-full border-2 border-r-2">Login</button>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
