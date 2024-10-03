import React from 'react'

function MovieButton(props) {

  let buttonStyle = "";

  switch(props.name) {
    case 'Watch Later':
      buttonStyle = "fa-regular fa-hourglass-half fa-spin";
      break;
    case 'Watched':
      buttonStyle = "fa-solid fa-circle-check fa-beat-fade";
      break;
    // default:
      // code block
  }

  function addMovie() {
    props.onAdd('Movie add to Watch later');
 }

  return (
    <button className="button-effect button-m" id={props.buttonId}
        // onClick={addMovieToWatchLater({props.idMovieInfo}, {props.moiveName})}
        onClick={addMovie}
        >
        <i className={buttonStyle} style={{fontSize: '11px'}}></i> &nbsp; {props.name}</button>
  )
}

export default MovieButton