import { useState, useEffect, useRef } from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CardsContainer from "./components/CardsContainer";
import movies from "./components/Movies";


function App() {

  const appTitle = 'Movie Watchlist'

  return (
    <>
      <Header title={ appTitle } />
      <Navbar />

	    <CardsContainer movies = { movies } />

      <Footer title= { appTitle } />
    </>
  )
}

export default App
