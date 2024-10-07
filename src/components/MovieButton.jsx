import React, { useState } from 'react'

function MovieButton(props) {

  let [name, setName] = useState(props.name);

  function initPopup() {
    props.disableButtons();
    setName('Added')
    props.onAdd(props.msg, props.buttonStyle);
 }

  let fontColor = props.isDisabled ? {color: "gray"} : null;

  return (
    <button className="button-effect button-m" id={props.buttonId}
        style={fontColor}
        disabled={props.isDisabled}
        // onClick={addMovieToWatchLater({props.idMovieInfo}, {props.moiveName})}
        onClick={initPopup}
        >
        <i className={props.buttonStyle}></i> &nbsp; {name}</button>
  )
}

export default MovieButton