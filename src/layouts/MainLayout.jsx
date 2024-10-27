import { Outlet } from 'react-router-dom'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import Header from "../components/layout/Header"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import PopUp from '../components/popup/PopUp'


function MainLayout() {

  const [currentPopup, setCurrentPopup] = useState({message: '',icon: ''});
  const [isShowing, setIsShowing] = useState(false);
  const popupTimeoutRef = useRef(null);
  const clearPopupTimeoutRef = useRef(null);

  const showPopup = useCallback((msg, icon) => {
    if (msg === currentPopup.message) return;
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    if (clearPopupTimeoutRef.current) clearTimeout(clearPopupTimeoutRef.current);
    if (!isShowing) {
      setIsShowing(true);
      // setCurrentPopup({ message: '', icon: '' });
    }
    setCurrentPopup({ message: msg, icon: icon });
    // setIsShowing(true);

    popupTimeoutRef.current = setTimeout(() => {
      setIsShowing(false);
    }, 2500);
    clearPopupTimeoutRef.current = setTimeout(() => {
      setCurrentPopup({ message: '', icon: '' });
    }, 3000);
  }, [currentPopup.message, isShowing]);

useEffect(() => {
  return () => {
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    if (clearPopupTimeoutRef.current) clearTimeout(clearPopupTimeoutRef.current);
  };
}, []);


  const [isLoading, setLoading] = useState(false);

  return (
    <>
        <Header title={ import.meta.env.VITE_APP_NAME } />
        <Navbar />

        <Outlet context={{ showPopup, setLoading }} />

        <PopUp message={currentPopup.message} 
          icon={currentPopup.icon} 
          show={isShowing} />

        <Footer title= { import.meta.env.VITE_APP_NAME } />

        <div className="loader" style={{display: isLoading ? 'grid' : 'none'}}></div>
    </>
  )
}

export default MainLayout