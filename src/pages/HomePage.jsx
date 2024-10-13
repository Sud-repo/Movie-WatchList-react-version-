import React, {useState, useEffect} from 'react'
import CardsContainer from "../components/CardsContainer";
import jsonMovies from "../components/Movies";
import Empty from '../components/Empty';
import Loader from '../components/Loader';


function HomePage() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect( () => {
    async function fetchMovies() {
      try{
        const res = await fetch('/base-url/movies');
        const jsonRes = await res.json();
        setMovies(jsonRes.data);
      } catch (error) {
        console.log('Error fetching Data: ' +error);
        setMovies(jsonMovies);
      } finally {
        setLoading(false)
      }
    }

    fetchMovies();
  }, [])

  let isMovies = movies.length === 0 ? false : true;

  return (
    <>
      {isLoading && <Loader /> }
      {isMovies ?  <CardsContainer movies = { movies } isHome={true} /> : <Empty/>}
    </>
  )
}

export default HomePage