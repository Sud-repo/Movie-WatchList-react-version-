import { Outlet } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import Header from "../components/layout/Header"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import PopUp from '../components/popup/PopUp'
import Loader from '../components/Loader'


function MainLayout() {

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
    }, 3500); // 3-second duration for popup
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
    if(currentPopup) 
      if (msg === currentPopup.message)
        return;
    setPopupQueue((queue) => [...queue, { message: msg, icon: icon }]); // Add new popup to the queue
  };

  const [isLoading, setLoading] = useState(false);

  return (
    <>
        <Header title={ import.meta.env.VITE_APP_NAME } />
        <Navbar />
        <Outlet context={{ showPopup, setLoading }} />
        <Footer title= { import.meta.env.VITE_APP_NAME } />
        {currentPopup && (
          <PopUp 
            message={currentPopup.message} 
            icon={currentPopup.icon} 
            show={isShowing}
            />
        )}
        <Loader show={isLoading} />
    </>
  )
}

export default MainLayout