import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Navbar/Navbar.css" ;         // importing Navbar.css file 

function Navbar() {

  const navigate = useNavigate();

  const[show, handleShow] = useState(false);

  const transitionNavbar = () =>{
    if(window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }

  useEffect(() =>  {
    window.addEventListener("scroll", transitionNavbar);  // add a eventlistener for the transition
    return () => window.removeEventListener("scroll", transitionNavbar); 
  }, []);


  return (
    <div className= {`Navbar ${show && "nav_Black"}`}>
        <div className="nav_contents">
            <img 
              onClick={() => navigate("/")}
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" className="nav_Logo" />
            <img
              onClick={() => navigate("/profile")}
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" className="nav_Avatar" />
        </div> 
    </div>
  )
}

export default Navbar