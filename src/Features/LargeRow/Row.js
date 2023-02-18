import axios from './../Axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Row.css";

function Row({title, fetchUrl, isLargeRow = false}) {
  
  const[root, setRoot] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setRoot(request.data.results);
      return request;
    }

    fetchData();

  }, [fetchUrl]);


    console.log(root);


    return (
      <div className="row">
      <h2>{title}</h2>

        <div className= "row_posters">

          {root.map((movie) => (
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name} 
            />
          )
          ))}

        </div>
      </div>
    
    
      );
}

export default Row;