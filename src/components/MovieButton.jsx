import React, { useState } from 'react'

function MovieButton(props) {


  function initPopup() {
    props.disableButtons();
    props.onAdd(props.msg, props.buttonStyle);
 }

  let fontColor = !props.isAdded ? {color: "gray"} : null;

  return (
    <button className="button-effect button-m" id={props.buttonId}
        style={fontColor}
        disabled={!props.isAdded}
        // onClick={addMovieToWatchLater({props.idMovieInfo}, {props.moiveName})}
        onClick={initPopup}
        >
        <i className={props.buttonStyle}></i> &nbsp; {props.name}</button>
  )
}

export default MovieButton