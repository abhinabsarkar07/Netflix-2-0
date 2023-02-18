import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "../../Features/Axios";
import requests from "../../Features/Requests";
import "./Banner.css"

function Banner() {

  const[root, setRoot] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
        setRoot(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
    }

    fetchData();
  }, [])

  console.log(root);

  
    //truncate function to decrease the number of charchter to display
    function truncate(string, n){                
        return string?.length > n ? string.substr(0, n - 1) + '...': string;
    }
 
  return (
  <header 
    className='banner' 
    style={{
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${root?.backdrop_path}")`,
    backgroundPosition: "center center",

  }}
  >
    <div className="banner_contents">
        <h1 className="banner_title">{root?.title || root?.name || root?.original_name}</h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
        </div>
        <h1 className="banner_Description">{truncate(root?.overview, 150)}</h1>
    </div>
    {/* <div className="banner--fadeBottom" /> */}
  </header>
  );
}

export default Banner; 