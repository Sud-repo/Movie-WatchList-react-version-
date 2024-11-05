import React, {useState, useContext } from 'react'
import MovieButton from './MovieButton';
import { useOutletContext } from 'react-router-dom';
import { MovieFilterContext } from '../../context/MovieFilterContext';

function WatchlistButtons(props) {

  const [isWatched, setIsWatched] = useState(props.isDisabled);
  function toggleIsWatched() {
    setIsWatched(prev => !prev);
}
  const { showPopup } = useOutletContext();
    const removeFromUserMovie = useContext(MovieFilterContext);


  const removeMovieFromWatchList = async (icon) => {
    try{
      props.showLoading(true);
        const res = await fetch(`/base-url/movies/remove/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const jsonRes = await res.json();
        if (res.status == 201 || res.status == 202 || res.status == 208) {
            showPopup(props.movieName + ': ' + jsonRes.message, icon)
            removeFromUserMovie(props.id)
        }
    } catch (error) {
        console.log('Error fetching Data: ' +error);
        showPopup('Error! Please Try Later', 'fa-solid fa-circle-exclamation')
    } finally {props.showLoading(false)}
  }

    const setMovieToWatched = async (icon) => {
    if(isWatched){
      showPopup(props.movieName + ': Alredy Watched', icon);
      return;
    }
    try{
      props.showLoading(true);
      const res = await fetch(`/base-url/movies/watched/${props.id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          }
      });
      const jsonRes = await res.json();
      if (res.status == 201 || res.status == 202 || res.status == 208) {
          showPopup(props.movieName + ': ' + jsonRes.message, icon)
          toggleIsWatched()
      }
      props.showLoading(false);
      } catch (error) {
          console.log('Error fetching Data: ' +error);
          showPopup('Error! Please Try Later', 'fa-solid fa-circle-exclamation')
          props.showLoading(false);
      }
    }

  return (
    <>
    {isWatched && <i className='fa-solid fa-circle-check watched-icon'></i>}
      <MovieButton 
          buttonId={'Button-1'} 
          name='Remove'
          onButtonClick={removeMovieFromWatchList}
          buttonStyle = 'fa-solid fa-trash fa-beat-fade'
          isHome={false}
      />
      {!isWatched && <MovieButton
          buttonId={'Button-2'} 
          name='Watched'
          onButtonClick={setMovieToWatched}
          buttonStyle = 'fa-solid fa-circle-check fa-beat-fade'
          isHome={false}
      />}
    </>
  )
}

export default WatchlistButtons