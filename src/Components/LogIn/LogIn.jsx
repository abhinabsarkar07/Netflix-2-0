import React, { useState } from 'react';
import SignInScreen from '../SignInScreen/SignInScreen';
import './LogInScreen.css';

function LogIn() {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className = "loginScreen">
        <div className="loginScreen_background">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix" className="loginScreen_logo" />
        
        
        <button
        onClick={() => setSignIn(true)}  
        className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient"/>
        </div>
      
        <div className="loginScreen_body">
          {signIn ? (
            <SignInScreen  />
          ):(
            <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen_input">
              <form>
                <input  
                type = "email"
                placeholder= "Email Address"
                />
                <button
                onClick={() => setSignIn(true)} 
                className = "loginScreen_GetStarted">Get Started</button>
              </form>
            </div>
            </>
          )
          }
        
        </div>
       

    </div>
  )
}

export default LogIn