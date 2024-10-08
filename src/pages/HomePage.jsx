import React from 'react'
import CardsContainer from "../components/CardsContainer";
import movies from "../components/Movies";


function HomePage() {
  return (
    <>
      <CardsContainer movies = { movies } />
    </>
  )
}

export default HomePage