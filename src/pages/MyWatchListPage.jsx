import React, { useEffect } from 'react'
import CardsContainer from '../components/movie/CardsContainer';
import Empty from '../components/movie/Empty';
import MovieFilter from '../components/movie/MovieFilter';
import { useMovieContext } from '../context/MovieContext';
import { useOutletContext } from 'react-router-dom';

function MyWatchListPage() {

  const { setLoading } = useOutletContext();
  // Fetching movies is now part of the context state, but you can still call it directly
  const { userMovies, setUserMovies } = useMovieContext();

    async function fetchUserMovies(url) {
      try{
        setLoading(true);
        const res = await fetch(url);
        const jsonRes = await res.json();
        setUserMovies(jsonRes.data);
      } catch (error) {
        console.log('Error fetching Data: ' +error);
      } finally {
        setLoading(false)
      }
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
                    /> 
                    : <Empty/>}
      </>
    )
}

export default MyWatchListPage