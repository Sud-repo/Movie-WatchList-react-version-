import React from "react";

function MovieButton(props) {

  function handleClickHome() {
    props.onButtonClick(props.name === 'Watch Later' ? true : false, props.buttonStyle)
    
  }
  function handleClickWatchlist() {
    props.onButtonClick(props.buttonStyle)
  }

  return (
    <button className={`button-effect button-m ${props.name === 'Remove' ? 'button-del' : ''}`} 
        id={props.buttonId}
        onClick={props.isHome ? handleClickHome : handleClickWatchlist} >
        <i className={props.buttonStyle || ''}></i> &nbsp; {props.name}</button>
  )
}

export default MovieButton;