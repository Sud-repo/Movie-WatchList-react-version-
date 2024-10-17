import React, { useState, useEffect, useRef} from 'react'

function PopUp(props) {

  const [isVisible, setIsVisible] = useState(props.show);
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    let timeoutId; // Declare the timeoutId variable outside of the if-else blocks

    if (props.show) {
      setIsVisible(true);
      // Delay setting the opacity to 1
      timeoutId = setTimeout(() => {
        setOpacity(1);
      }, 10);
    } else {
      setOpacity(0);
    }
    
    return () => {
      clearTimeout(timeoutId); // Clean up the timeout
    };
  }, [props.show]);

  const handleTransitionEnd = () => {
    if (!props.show) {
      setIsVisible(false);
    }
  };

  const popupStyle = {
    opacity: opacity,
    transition: 'opacity 1s ease-in-out',
    display: isVisible ? 'block' : 'none',
  };

  return (
    <div className="popup" style={popupStyle} onTransitionEnd={handleTransitionEnd}>
      <i className={props.icon} style={{color: '#d3ff13', fontSize: '20px', marginRight: '10px'}}></i> 
      <p className="message"> {props.message} </p>
	</div>
  )
}

export default PopUp