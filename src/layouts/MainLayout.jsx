import { Outlet } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import Header from "../components/layout/Header"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import PopUp from '../components/popup/PopUp'


function MainLayout() {

  const [currentPopup, setCurrentPopup] = useState({message: '',icon: '', show: false});
  const popupTimeoutRef = useRef(null);
  const contentTimeoutRef = useRef(null);

  const showPopup = (message, icon) => {
    if (message === currentPopup.message) return;
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    if (contentTimeoutRef.current) clearTimeout(contentTimeoutRef.current);

    setCurrentPopup({ message: message, icon: icon, show:true });

    popupTimeoutRef.current = setTimeout(() => {
      setCurrentPopup(prev => {
        return { ...prev, show:false }
    });}, 2500);
    contentTimeoutRef.current = setTimeout(() => {
      setCurrentPopup({ message: '', icon: '', show:false })   
    }, 3000);
  }

useEffect(() => {
  return () => {
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    if (contentTimeoutRef.current) clearTimeout(contentTimeoutRef.current);
  };
}, []);

  return (
    <>
        <Header title={ import.meta.env.VITE_APP_NAME } />
        <Navbar />

        <Outlet context={{ showPopup }} />

        <PopUp message={currentPopup.message} 
          icon={currentPopup.icon} 
          show={currentPopup.show} />

        <Footer title= { import.meta.env.VITE_APP_NAME } />
    </>
  )
}

export default MainLayout