import React, { useState, useEffect } from 'react';

function Loader({ show }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [show]);


  return (
		<div className="loader" style={{display: isVisible ? 'grid' : 'none'}}></div>
  )
}

export default React.memo(Loader);