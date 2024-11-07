import React, { useState } from "react";

function MovieButton(props) {

  const [isLoading, setLoading] = useState(false);

  async function handleClickHome() {
    setLoading(true)
    await props.onButtonClick(props.name === 'Watch Later', props.buttonStyle)
    setTimeout(() => setLoading(false), 500);
  }
  async function handleClickWatchlist() {
    setLoading(true)
    await props.onButtonClick(props.buttonStyle)
    setLoading(false)
  }

  return (
    <button className={`button-effect button-m ${props.name === 'Remove' ? 'button-del' : ''}`} 
        id={props.buttonId}
        onClick={props.isHome ? handleClickHome : handleClickWatchlist} >
        <i className={props.buttonStyle || ''}></i> &nbsp; {isLoading ? "" : props.name}</button>
  )
}

export default MovieButton;