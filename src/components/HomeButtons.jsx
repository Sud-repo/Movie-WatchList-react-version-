import MovieButton from './MovieButton'

function HomeButtons(props) {

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
                props.onAdd(props.movieName + jsonRes.message, icon)
            }
        } catch (error) {
            console.log('Error fetching Data: ' +error);
            props.onAdd('Error! Please Try Later', '')
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