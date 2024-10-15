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
      {isMovies ?  <CardsContainer movies = { movies } isHome={true} /> : <Empty/>}
    </>
  )
}

export default HomePage