import React, { useState, useEffect } from 'react';

function Loader({ show }) {
  const [isVisible, setIsVisible] = useState(show);  // Control display of loader
  const [opacity, setOpacity] = useState(show ? 0.6 : 0); // Controls fade effect
  
  useEffect(() => {
    if (show) {
      // When `show` is true, make loader visible and start showing it
      setIsVisible(true);
      setOpacity(0.6);  // Fade-in effect
    } else {
      // When `show` is false, start fading out the loader
      setOpacity(0);  // Trigger fade-out
    }
  }, [show]);

  const handleTransitionEnd = () => {
    if (!show) {
      // Once the fade-out transition completes, hide the loader
      setIsVisible(false);
    }
  };

  const loaderStyle = {
    opacity: opacity,
    transition: 'opacity 0.5s ease-in-out',
    display: isVisible ? 'flex' : 'none'  // Show or hide based on visibility
  };

  return (
    <div className="loader-bg" style={loaderStyle} onTransitionEnd={handleTransitionEnd}>
		<div className="loader"></div>
	</div>
  )
}

export default Loader