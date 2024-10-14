import MovieButton from './MovieButton'
import { useOutletContext } from 'react-router-dom';

function HomeButtons(props) {

    const { showPopup } = useOutletContext();

    async function setMovietoWatchLater(isWatchLater, icon) {
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
                showPopup(props.movieName + jsonRes.message, icon)
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
            buttonId={'1_Button_' + props.id} 
            name='Watch Later'
            addToWatchlist={setMovietoWatchLater}
            buttonStyle = 'fa-regular fa-hourglass-half fa-spin'
        />
        <MovieButton
            buttonId={'2_Button_' + props.id} 
            name='Watched'
            addToWatchlist={setMovietoWatchLater}
            buttonStyle = 'fa-solid fa-circle-check fa-beat-fade'
        />
    </>
  )
}

export default HomeButtons