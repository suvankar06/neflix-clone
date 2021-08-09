import React from 'react'
import Row from '../Row';
import requests from '../requests';
import Banner from '../Banner';
import './HomeScreen.css'
import Nav from '../Nav';
function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
             <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentries}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
        </div>
    )
}

export default HomeScreen
