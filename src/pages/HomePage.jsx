import React from 'react'
import CardsContainer from "../components/CardsContainer";
import movies from "../components/Movies";
import Empty from '../components/Empty';


function HomePage() {

  let isMovies = movies.length === 0 ? false : true;

  return (
    <>
      {isMovies ?  <CardsContainer movies = { movies } /> : <Empty/>}
    </>
  )
}

export default HomePage