import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "../Navbar/Navbar.css" ;         // importing Navbar.css file 

function Navbar() {

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
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" className="nav_Logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" className="nav_Avatar" />
        </div>
    
    
    
    
    
    
    </div>
  )
}

export default Navbar