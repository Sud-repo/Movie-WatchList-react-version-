import React, { useState, useEffect } from 'react'

function PopUp(props) {

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (props.show) {
		  setVisible(true);
		  // Hide popup after 'duration' seconds
		  const timeout = setTimeout(() => {
			setVisible(false);
			// Callback to reset the message/icon
			props.onClose();
		  }, 3000);
	
		  return () => clearTimeout(timeout); // Cleanup on unmount or show change
		}
	  }, [props.show]);


  return (
    <div className="popup" style={{
        display: visible ? 'block' : 'none',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}>
		{/* <i className="fa-regular fa-hourglass-half" id="wl-b" style="color: #d3ff13;font-size: 20px;margin-right: 10px; display: none;"></i> 
		<i className="fa-solid fa-circle-check" id="w-b" style="color: #d3ff13;font-size: 20px;margin-right: 10px; display: none;"></i>  */}
		<p className="message"> {props.msg} </p>
	</div>
  )
}

export default PopUp