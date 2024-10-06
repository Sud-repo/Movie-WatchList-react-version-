import React, { useState, useEffect } from 'react'

function PopUp(props) {

  return (
    <div className="popup" style={{
        display: props.show ? 'block' : 'none',
        opacity: props.show ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}>
		{/* <i className="fa-regular fa-hourglass-half" id="wl-b" style="color: #d3ff13;font-size: 20px;margin-right: 10px; display: none;"></i> 
		<i className="fa-solid fa-circle-check" id="w-b" style="color: #d3ff13;font-size: 20px;margin-right: 10px; display: none;"></i>  */}
		<p className="message"> {props.message} </p>
	</div>
  )
}

export default PopUp