import React, { useState, useEffect } from 'react';

function Loader({ show }) {
  const [isVisible, setIsVisible] = useState(show);
  const [opacity, setOpacity] = useState(show ? 0.6 : 0);
  
  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setOpacity(0.6);
    } else {
      setOpacity(0);
    }
  }, [show]);

  const handleTransitionEnd = () => {
    if (!show) {
      setIsVisible(false);
    }
  };

  const loaderStyle = {
    opacity: opacity,
    transition: 'opacity 0.5s ease-in-out',
    display: isVisible ? 'flex' : 'none'
  };

  return (
    <div className="loader-bg" style={loaderStyle} onTransitionEnd={handleTransitionEnd}>
		<div className="loader"></div>
	</div>
  )
}

export default Loader