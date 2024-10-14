
function MovieButton(props) {

  function handleClickToAdd() {
    props.addToWatchlist(props.name === 'Watch Later' ? true : false, props.buttonStyle)
  }
  function handleClickToRemove() {
    props.addToWatchlist()
  }

  const isRemove = props.name === 'Remove';
  const buttonStyle = isRemove ? "button-effect button-m button-del" : "button-effect button-m";

  return (
    <button className={buttonStyle} id={props.buttonId}
        
        onClick={isRemove ? handleClickToRemove : handleClickToAdd}
        >
        <i className={props.buttonStyle}></i> &nbsp; {props.name}</button>
  )
}

export default MovieButton