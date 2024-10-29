import React from "react";

function MovieButton(props) {

  function handleClickHome() {
    props.onButtonClick(props.name === 'Watch Later' ? true : false, props.buttonStyle)
    
  }
  function handleClickWatchlist() {
    props.onButtonClick(props.buttonStyle)
  }

  const isRemove = props.name === 'Remove';
  const buttonStyle = isRemove ? "button-effect button-m button-del" : "button-effect button-m";

  return (
    <button className={buttonStyle} id={props.buttonId}
        onClick={props.isHome ? handleClickHome : handleClickWatchlist} >
        <i className={props.buttonStyle || ''}></i> &nbsp; {props.name}</button>
  )
}

export default React.memo(MovieButton);