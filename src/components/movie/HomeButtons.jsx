import React from 'react';
import MovieButton from './MovieButton'
import { useOutletContext } from 'react-router-dom';

function HomeButtons(props) {

    const { showPopup } = useOutletContext();

    const addMovieToWatchList = async (isWatchLater, icon) => {
        props.showLoading(true);
        const param = isWatchLater ? "is-wl=true" : "is-w=true";
        try{
            const res = await fetch(`/base-url/movies/user-movie?id=${props.id}&${param}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const jsonRes = await res.json();
            if (res.status == 201 || res.status == 208) {
                showPopup(props.movieName + ': ' + jsonRes.message, icon)
            }
        } catch (error) {
            console.log('Error fetching Data: ' +error);
            showPopup('Error! Please Try Later', 'fa-solid fa-circle-exclamation')
        } finally{ props.showLoading(false); }
    }
  return (
    <>
        <MovieButton 
            buttonId={'Button-1'} 
            name='Watch Later'
            onButtonClick={addMovieToWatchList}
            buttonStyle = 'fa-regular fa-hourglass-half fa-spin'
            isHome={true}
        />
        <MovieButton
            buttonId={'Button-2'} 
            name='Watched'
            onButtonClick={addMovieToWatchList}
            buttonStyle = 'fa-solid fa-circle-check fa-beat-fade'
            isHome={true}
        />
    </>
  )
}

export default HomeButtons;