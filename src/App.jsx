import { useState } from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CardsContainer from "./components/CardsContainer";
import movies from "./components/Movies";
import PopUp from "./components/PopUp";

function App() {

  let [show , setPopUp] = useState(false);

  const appTitle = 'Movie Watchlist'

  function popMessage(msg) {
    console.log(msg);
    setPopUp(!show);
  }

  return (
    <>
      <Header title={ appTitle } />
      <Navbar title = { appTitle } />

	    <CardsContainer movies = { movies } onAdd = {popMessage} />
      { show && <PopUp />}

      <Footer title= { appTitle } />
	
    </>
  )
}

export default App
