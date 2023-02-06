import React from 'react';
import "./HomeScreen.css";     //importing HomeScreen.css file   
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner'  //importing Navbar components
import requests from '../../Features/Requests';
import Row from '../../Features/LargeRow/Row';

function HomeScreen() {
  return (
    <div className="homeScreen">
        <Navbar />

        <Banner />

        <Row
          title = "NETFLIX ORGINALS"
          fetchUrl = {
            requests.fetchNetflixOriginals
          }
          isLargeRow
        />

        <Row
          title = "Trending Now"
          fetchUrl = {
            requests.fetchTrending
          }
        />

        <Row
          title = "Top Rated"
          fetchUrl = {
            requests.fetchTopRated
          }
        />

        <Row
          title = "Action Movies"
          fetchUrl = {
            requests.fetchActionMovies
          }
        />

        <Row
          title = "Comedy Movies"
          fetchUrl = {
            requests.fetchComedyMovies
          }
        />

        <Row
          title = "Horror Movies"
          fetchUrl = {
            requests.fetchHorrorMovies
          }
        />

        <Row
          title = "Romance Movies"
          fetchUrl = {
            requests.fetchRomanceMovies
          }
        />


        <Row
          title = "Documentaries"
          fetchUrl = {
            requests.fetchDocumentaries
          }
        />


    </div>
  )
}

export default HomeScreen
