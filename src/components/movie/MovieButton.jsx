
function MovieButton(props) {

  function addMovieToWatchlist() {
    props.addToWatchlist(props.name === 'Watch Later' ? true : false, props.buttonStyle)
  }

  return (
    <button className="button-effect button-m" id={props.buttonId}
        
        onClick={addMovieToWatchlist}
        >
        <i className={props.buttonStyle}></i> &nbsp; {props.name}</button>
  )
}

export default MovieButton