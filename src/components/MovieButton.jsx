import React from 'react'

function MovieButton(props) {

  function initPopup() {
    props.onAdd(props.msg);
 }

  return (
    <button className="button-effect button-m" id={props.buttonId}
        // onClick={addMovieToWatchLater({props.idMovieInfo}, {props.moiveName})}
        onClick={initPopup}
        >
        <i className={props.buttonStyle} style={{fontSize: '11px'}}></i> &nbsp; {props.name}</button>
  )
}

export default MovieButton