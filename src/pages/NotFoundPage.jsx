import { Link } from 'react-router-dom'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='not-found'>
        <h1 style={{fontSize: '10rem', margin: '0px'}} >404!</h1>
        <h2>Page Not Found <i className="fa-solid fa-triangle-exclamation fa-beat"></i> </h2>
        <p className='nf-p'>The page you are looking for does not exist.<br /> 
        How you got here is a mystery.<br />
        But you can click the button below to go back to the homepage.</p>
        <Link className='home-b' to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage