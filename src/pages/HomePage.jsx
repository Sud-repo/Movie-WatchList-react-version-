import React, {useState, useEffect} from 'react'
import CardsContainer from "../components/movie/CardsContainer";
import Empty from '../components/movie/Empty';
import Loader from '../components/Loader'


function HomePage() {

  const [movies, setMovies] = useState(null);

  useEffect( () => {
    async function fetchMovies() {
      try{
        const res = await fetch('/base-url/movies');
        if (!res.ok) throw new Error(`Status - ${res.status} ${res.statusText}`);
        const jsonRes = await res.json();
        setMovies(jsonRes.data);
      } catch (error) {
        console.error(error);
        setMovies([]);
      } 
    }

    fetchMovies();
  }, [])

  return (
    <>
      {movies === null ? <Loader /> : movies.length > 0 ? (
        <CardsContainer movies={movies} isHome={true} />
      ) : (
        <Empty />
      )}
    </>
  )
}

export default HomePage