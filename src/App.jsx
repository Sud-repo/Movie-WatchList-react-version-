import { useState, useEffect, useRef } from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CardsContainer from "./components/CardsContainer";
import movies from "./components/Movies";
import PopUp from "./components/PopUp";

function App() {

  const appTitle = 'Movie Watchlist'

  const [popupQueue, setPopupQueue] = useState([]); // Queue of popups
  const [currentPopup, setCurrentPopup] = useState(null); // Current active popup
  const [isShowing, setIsShowing] = useState(false); // Whether a popup is currently being shown
  const popupTimeoutRef = useRef(null); // Ref to store the timeout id

  // Function to handle the queue processing
  const processQueue = () => {
    if (popupQueue.length === 0 || isShowing) return;

    const nextPopup = popupQueue[0]; // Take the first popup from the queue
    setCurrentPopup(nextPopup); // Display the next popup
    setIsShowing(true); // Set flag that popup is being shown

    // Show the popup for 3 seconds, then hide it
    popupTimeoutRef.current = setTimeout(() => {
      setIsShowing(false); // Mark popup as hidden
      setCurrentPopup(null); // Clear current popup after hiding
      setPopupQueue((queue) => queue.slice(1)); // Remove the first item in queue
    }, 3000); // 3-second duration for popup
  };

  useEffect(() => {
    // Trigger queue processing when `popupQueue` or `isShowing` changes
    if (!isShowing && popupQueue.length > 0) {
      processQueue();
    }
  }, [popupQueue, isShowing]);
  // Separate useEffect for cleanup on unmount
  useEffect(() => {
    return () => {
      // Cleanup timeout only when the component unmounts
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only on unmount

  // Function to add a new popup to the queue
  const showPopup = (msg, icon) => {
    setPopupQueue((queue) => [...queue, { message: msg, icon: icon }]); // Add new popup to the queue
  };

  return (
    <>
      <Header title={ appTitle } />
      <Navbar />

	    <CardsContainer movies = { movies } onAdd = {showPopup} />
      {currentPopup && (
        <PopUp 
          message={currentPopup.message} 
          icon={currentPopup.icon}
          show={isShowing} />
      )}

      <Footer title= { appTitle } />
	
    </>
  )
}

export default App
