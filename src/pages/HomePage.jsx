import React, {useState, useEffect} from 'react'
import CardsContainer from "../components/movie/CardsContainer";
import jsonMovies from "../components/movie/Movies";
import Empty from '../components/movie/Empty';
import { useOutletContext } from 'react-router-dom';


function HomePage() {

  const [movies, setMovies] = useState([]);
  const { setLoading } = useOutletContext();

  useEffect( () => {
    async function fetchMovies() {
      try{
        setLoading(true)
        const res = await fetch('/base-url/movies');
        if (!res.ok) throw new Error(`Status - ${res.status} ${res.statusText}`);
        const jsonRes = await res.json();
        setMovies(jsonRes.data);
      } catch (error) {
        console.error(error);
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
      {isMovies ?  <CardsContainer movies = { movies } isHome={true} /> : <Empty/>}
    </>
  )
}

export default HomePage