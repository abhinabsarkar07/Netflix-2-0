import "./App.css";

//libraries

import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./Features/UserSlice";
import { useDispatch, useSelector } from "react-redux";

//components

import HomeScreen from '../src/Components/Home/HomeScreen.jsx';    
import LogIn from "./Components/LogIn/LogIn";
import ProfileScreen from "./Components/Profile/ProfileScreen";



function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth) {
        //Log In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))

      }
      else{
        //Log Out
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, [dispatch]);

  return (
    <div className="App">
      
      <BrowserRouter>
      <div>
        {!user ?(
          <LogIn  />
        ) : (
          <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/profile" element={<ProfileScreen/>} />
          </Routes>
        )}
       
      </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
