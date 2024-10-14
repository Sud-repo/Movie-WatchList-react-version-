import React from 'react'
import MovieButton from './MovieButton';
import { useOutletContext } from 'react-router-dom';

function WatchlistButtons(props) {

  const { showPopup } = useOutletContext();

  async function removeMovieFromWatchList(icon) {
    try{
        const res = await fetch(`/base-url/movies/remove/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const jsonRes = await res.json();
        if (res.status == 201 || res.status == 202 || res.status == 208) {
            showPopup(props.movieName + ': ' + jsonRes.message, icon)
            props.onRemove(props.id)
        }
    } catch (error) {
        console.log('Error fetching Data: ' +error);
        showPopup('Error! Please Try Later', '')
    }
    //  finally {
    //     setLoading(false)
    // }
  }

  async function setMovieToWatched(icon) {
    if(props.isDisabled){
      showPopup(props.movieName + ': Alredy Watched');
      return;
    }
    try{
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
      } catch (error) {
          console.log('Error fetching Data: ' +error);
          showPopup('Error! Please Try Later', '')
      }
      //  finally {
      //     setLoading(false)
      // }
  }

  return (
    <>
      <MovieButton 
          buttonId={'Button-1'} 
          name='Remove'
          onButtonClick={removeMovieFromWatchList}
          buttonStyle = 'fa-solid fa-trash fa-beat-fade'
      />
      <MovieButton
          buttonId={'Button-2'} 
          name='Watched'
          onButtonClick={setMovieToWatched}
          buttonStyle = 'fa-solid fa-circle-check fa-beat-fade'
      />
    </>
  )
}

export default WatchlistButtons