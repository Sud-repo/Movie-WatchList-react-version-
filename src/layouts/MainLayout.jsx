import { Outlet } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import Header from "../components/layout/Header"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import PopUp from '../components/popup/PopUp'
import Loader from '../components/Loader'


function MainLayout() {

  const [currentPopup, setCurrentPopup] = useState({message: '',icon: ''});
  const [isShowing, setIsShowing] = useState(false);
  const popupTimeoutRef = useRef(null); // Ref to store the timeout id

  const showPopup = (msg, icon) => {
    if (msg === currentPopup.message) return;
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    if (isShowing) {
      setIsShowing(false); // Mark popup as hidden immediately
      setCurrentPopup({ message: '', icon: '' }); // Clear current popup
      setTimeout(() => {
        setCurrentPopup({ message: msg, icon: icon });
        setIsShowing(true);
      }, 100);
    }else {
      setCurrentPopup({ message: msg, icon: icon });
        setIsShowing(true);
    }
    // Set a new timeout to hide the popup after 3 seconds
    popupTimeoutRef.current = setTimeout(() => {
      setIsShowing(false); // Mark popup as hidden
      setCurrentPopup({message: '',icon: ''}); // Clear current popup after hiding
    }, 3000); // 3-second duration for popup
  };

 // useEffect for cleanup on unmount
  useEffect(() => {
    return () => {
      // Cleanup timeout only when the component unmounts
      if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    };
  }, []); // Empty dependency array ensures this runs only on unmount

  const [isLoading, setLoading] = useState(false);

  return (
    <>
        <Header title={ import.meta.env.VITE_APP_NAME } />
        <Navbar />

        <Outlet context={{ showPopup, setLoading }} />

        <Footer title= { import.meta.env.VITE_APP_NAME } />

          <PopUp message={currentPopup.message} 
            icon={currentPopup.icon} 
            show={isShowing} />

        <Loader show={isLoading} />
    </>
  )
}

export default MainLayout