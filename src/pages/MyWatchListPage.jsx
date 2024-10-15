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

    useEffect( () => {
      async function fetchUserMovies() {
        try{
          const res = await fetch('/base-url/movies/watchlist');
          const jsonRes = await res.json();
          setUserMovies(jsonRes.data);
        } catch (error) {
          console.log('Error fetching Data: ' +error);
        } 
        // finally {
        //   setLoading(false)
        // }
      }
  
      fetchUserMovies();
    }, [])

    let isMovies = userMovies.length === 0 ? false : true;

    return (
      <>
        <MovieFilter />
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