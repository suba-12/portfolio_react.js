import React from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/style.css";
;


function Navbar() {
  return (
    <div className="navbar">
        <div className="toggleBtton" >
            <button>
              
            </button>
        </div>
        <div className="links">
            <Link to ="/"> Home </Link> 
            <Link to ="/Education"> Education </Link> 
            <Link to ="/Contact"> Contact </Link> 
        </div>    
    </div>
  );
}

export default Navbar;
