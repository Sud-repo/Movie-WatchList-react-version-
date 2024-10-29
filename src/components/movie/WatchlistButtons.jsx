import React, { useCallback, useContext } from 'react'
import MovieButton from './MovieButton';
import { useOutletContext } from 'react-router-dom';
import { MovieFilterContext } from '../../context/MovieFilterContext';

function WatchlistButtons(props) {

  const { showPopup } = useOutletContext();
    const removeFromUserMovie = useContext(MovieFilterContext);


  const removeMovieFromWatchList = useCallback(async (icon) => {
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
  }, [props.id, props.movieName]);

    const setMovieToWatched = useCallback(async (icon) => {
    if(props.isDisabled){
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
          props.onWatched()
      }
      props.showLoading(false);
      } catch (error) {
          console.log('Error fetching Data: ' +error);
          showPopup('Error! Please Try Later', 'fa-solid fa-circle-exclamation')
          props.showLoading(false);
      }
    }, [props.id, props.movieName]);

  return (
    <>
      <MovieButton 
          buttonId={'Button-1'} 
          name='Remove'
          onButtonClick={removeMovieFromWatchList}
          buttonStyle = 'fa-solid fa-trash fa-beat-fade'
          isHome={false}
      />
      <MovieButton
          buttonId={'Button-2'} 
          name='Watched'
          onButtonClick={setMovieToWatched}
          buttonStyle = 'fa-solid fa-circle-check fa-beat-fade'
          isHome={false}
      />
    </>
  )
}

export default WatchlistButtons