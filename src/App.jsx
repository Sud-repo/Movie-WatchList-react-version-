import { useState } from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CardsContainer from "./components/CardsContainer";
import movies from "./components/Movies";
import PopUp from "./components/PopUp";

function App() {

  let [popupData , setPopupData] = useState({
    show: false,
    msg: '',
  });

  const appTitle = 'Movie Watchlist'

  function showPopup(msg) {
    setPopupData({
      show: true,
      msg: msg
    });
  }

  const handlePopupClose = () => {
    setPopupData({ show: false, message: '' });
  };

  return (
    <>
      <Header title={ appTitle } />
      <Navbar title = { appTitle } />

	    <CardsContainer movies = { movies } onAdd = {showPopup} />
      <PopUp
          msg = {popupData.msg}
          show = {popupData.show}
          onClose = {handlePopupClose}
       />

      <Footer title= { appTitle } />
	
    </>
  )
}

export default App
