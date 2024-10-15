import React, { useState, useEffect } from 'react'
import CardsContainer from '../components/movie/CardsContainer';
import Empty from '../components/movie/Empty';
import MovieFilter from '../components/movie/MovieFilter';

function MyWatchListPage() {

    const [userMovies, setUserMovies] = useState([]);

    function removeFromUserMovie(id) {
      setUserMovies(userMovies.filter(
        movie => movie.id != id
      ))
    }

    async function fetchUserMovies(url) {
      try{
        const res = await fetch(url);
        const jsonRes = await res.json();
        setUserMovies(jsonRes.data);
      } catch (error) {
        console.log('Error fetching Data: ' +error);
      } 
      // finally {
      //   setLoading(false)
      // }
    }

    useEffect( () => {
      fetchUserMovies('/base-url/movies/watchlist');
    }, [])

    let isMovies = userMovies.length === 0 ? false : true;

    return (
      <>
        <MovieFilter onFilter={fetchUserMovies} />
        {isMovies ?  <CardsContainer 
                    movies = { userMovies } 
                    isHome={false} 
                    onRemove={removeFromUserMovie}
                    /> 
                    : <Empty/>}
      </>
    )
}

export default MyWatchListPage