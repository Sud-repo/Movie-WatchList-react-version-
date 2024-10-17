import React, { useState, useEffect, useRef} from 'react'

function PopUp(props) {

  const popupStyle = {
    opacity: 1,
    // transition: 'opacity 0.5s ease-in-out',
    display: props.show ? 'block' : 'none',
  };

  return (
    <div className="popup" style={popupStyle}>
      <i className={props.icon} style={{color: '#d3ff13', fontSize: '20px', marginRight: '10px'}}></i> 
      <p className="message"> {props.message} </p>
	</div>
  )
}

export default PopUp