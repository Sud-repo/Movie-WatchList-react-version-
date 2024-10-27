import React, { useState, useEffect, createContext } from 'react'
import CardsContainer from '../components/movie/CardsContainer';
import Empty from '../components/movie/Empty';
import MovieFilter from '../components/movie/MovieFilter';
import { MovieFilterContext } from '../context/MovieFilterContext';
import { useOutletContext } from 'react-router-dom';
import Loader from '../components/Loader';

function MyWatchListPage() {

  const [userMovies, setUserMovies] = useState(null);

  const removeFromUserMovie = (id) => {
    setUserMovies(userMovies.filter(movie => movie.idMovieInfo !== id));
  };

    async function fetchUserMovies(url) {
      try{
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Status - ${res.status} ${res.statusText}`);
        const jsonRes = await res.json();
        setUserMovies(jsonRes.data);
      } catch (error) {
        console.error(error);
        setUserMovies([]);
      }
    }

    useEffect( () => {
      fetchUserMovies('/base-url/movies/watchlist');
    }, [])

    return (
      <MovieFilterContext.Provider value={removeFromUserMovie}>
        <MovieFilter onFilter={fetchUserMovies} />
        {userMovies == null ? <Loader /> : userMovies.length > 0 ? ( <CardsContainer 
                    movies = { userMovies } 
                    isHome={false} 
                    /> )
                    : <Empty/>}
      </MovieFilterContext.Provider>
    )
}

export default MyWatchListPage