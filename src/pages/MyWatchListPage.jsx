import React, { useState, useEffect, createContext } from 'react'
import CardsContainer from '../components/movie/CardsContainer';
import Empty from '../components/movie/Empty';
import MovieFilter from '../components/movie/MovieFilter';
import { MovieFilterContext } from '../context/MovieFilterContext';
import { useOutletContext } from 'react-router-dom';

function MyWatchListPage() {

  const [userMovies, setUserMovies] = useState([]);
  const { setLoading } = useOutletContext();

  const removeFromUserMovie = (id) => {
    setUserMovies(userMovies.filter(movie => movie.id !== id));
  };

    async function fetchUserMovies(url) {
      try{
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Status - ${res.status} ${res.statusText}`);
        const jsonRes = await res.json();
        setUserMovies(jsonRes.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }

    useEffect( () => {
      fetchUserMovies('/base-url/movies/watchlist');
    }, [])

    let isMovies = userMovies.length === 0 ? false : true;

    return (
      <MovieFilterContext.Provider value={removeFromUserMovie}>
        <MovieFilter onFilter={fetchUserMovies} />
        {isMovies ?  <CardsContainer 
                    movies = { userMovies } 
                    isHome={false} 
                    /> 
                    : <Empty/>}
      </MovieFilterContext.Provider>
    )
}

export default MyWatchListPage