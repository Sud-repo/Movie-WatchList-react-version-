import React, { useState, useEffect } from 'react'

function PopUp(props) {

  const [progress, setProgress] = useState(0);

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
    return () => {
      clearInterval(interval);
    };
  }, [props.show]);

  return (
    <div className="popup">
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