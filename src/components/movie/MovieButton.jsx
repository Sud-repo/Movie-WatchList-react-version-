
function MovieButton(props) {

  function handleClickToAdd() {
    props.onButtonClick(props.name === 'Watch Later' ? true : false, props.buttonStyle)
  }
  function handleClickToRemove() {
    props.onButtonClick(props.buttonStyle)
  }

  const isRemove = props.name === 'Remove';
  const buttonStyle = isRemove ? "button-effect button-m button-del" : "button-effect button-m";

  return (
    <button className={buttonStyle} id={props.buttonId}
        onClick={isRemove ? handleClickToRemove : handleClickToAdd} >
        <i className={props.buttonStyle || ''}></i> &nbsp; {props.name}</button>
  )
}

export default MovieButton