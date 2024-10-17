import React, { useState, useEffect, useRef } from 'react'

function PopUp(props) {

  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(0)
  const [isVisible, setIsVisible] = useState(false);
  const fadeOutTimeoutRef = useRef(null);
  const delayTimeoutRef = useRef(null);

  useEffect(() => {
    let interval;
    if (props.show) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 30);  // Adjust this value to make it 3 seconds (30ms * 100 steps = 3000ms = 3 seconds)
    }
    // Cleanup when popup is hidden or unmounted
    return () => {clearInterval(interval);};
  }, [props.show]);

  useEffect(() => {
    if (props.show) {
      setIsVisible(true);
      setTimeout(() => {setOpacity(1);}, 10);
      // After 2.5 seconds (2500 ms), start the fade-out
      delayTimeoutRef.current = setTimeout(() => {
        setOpacity(0); // Start fade-out
        fadeOutTimeoutRef.current = setTimeout(() => {
          setIsVisible(false); // Hide popup after fade-out is complete
        }, 500); // Wait for fade-out duration (0.5s)
      }, 3000); // 2.5 seconds delay before fade-out starts
    }
    // Cleanup when component unmounts or `show` changes
    return () => {
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
      if (fadeOutTimeoutRef.current) clearTimeout(fadeOutTimeoutRef.current); 
    };
  }, [props.show]);

  let popupStyle = {opacity: opacity,
                    transition: 'opacity 0.5s ease-in-out',
                    display: isVisible ? 'block' : 'none', }

  return (
    <div className="popup" style={popupStyle}>
		<i className={props.icon} style={{color: '#d3ff13', fontSize: '20px', marginRight: '10px'}}></i> 
		<p className="message"> {props.message} </p>
    <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            transition: 'width 0.03s linear'
          }}
        ></div>
      </div>
	</div>
  )
}

export default PopUp