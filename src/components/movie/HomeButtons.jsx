import MovieButton from './MovieButton'
import { useOutletContext } from 'react-router-dom';

function HomeButtons(props) {

    const { showPopup } = useOutletContext();

    async function addMovieToWatchList(isWatchLater, icon) {
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
                console.log(jsonRes);
                showPopup(props.movieName + ': ' + jsonRes.message, icon)
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
            name='Watch Later'
            onButtonClick={addMovieToWatchList}
            buttonStyle = 'fa-regular fa-hourglass-half fa-spin'
        />
        <MovieButton
            buttonId={'Button-2'} 
            name='Watched'
            onButtonClick={addMovieToWatchList}
            buttonStyle = 'fa-solid fa-circle-check fa-beat-fade'
        />
    </>
  )
}

export default HomeButtons