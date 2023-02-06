import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Row.css";

function Row({title, fetchUrl, isLargeRow = false}) {
  
  const[root, setRoot] = useState([]);

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



    </div>
  )
}

export default Row