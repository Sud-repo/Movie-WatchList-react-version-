import React, { useState, useEffect} from 'react'

function PopUp(props) {

  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    let timeoutId;
    if (props.show) {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setOpacity(1);
      }, 10);
    } else {
      if (opacity != 0) setOpacity(0);
    }
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [props.show]);

  const handleTransitionEnd = () => {
    if (!props.show) {
      setIsVisible(false);
    }
  };

  const popupStyle = {
    opacity: opacity,
    transition: 'opacity 0.5s ease-in-out',
    display: isVisible ? 'block' : 'none',
  };

  return (
    <div className="popup" style={popupStyle} onTransitionEnd={handleTransitionEnd}>
      <i className={props.icon} style={{color: '#d3ff13', fontSize: '20px', marginRight: '10px'}}></i> 
      <p className="message"> {props.message} </p>
	</div>
  )
}

export default React.memo(PopUp);