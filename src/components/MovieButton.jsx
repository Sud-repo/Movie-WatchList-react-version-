// import React, { useState, useEffect } from 'react'

function MovieButton(props) {

  // // /movies/user-movie' + '?id=' + idMovie + '&is-wl=true
  // const [isActive, setActive] = useState(props.isAdded);

  // useEffect( () => {
  //   async function addMovieToWatchList() {
  //     try{
  //       const res = await fetch(`/api/movies/user-movie?id=${props.movieId}&${props.param}`);
  //       const jsonRes = await res.json();
  //       setMovies(jsonRes.data);
  //     } catch (error) {
  //       console.log('Error fetching Data: ' +error);
  //       setMovies(jsonMovies);
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  // }, [isActive])

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