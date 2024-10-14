import React, { useState, useEffect } from 'react'
import CardsContainer from '../components/movie/CardsContainer';
import Empty from '../components/movie/Empty';

function MyWatchListPage() {

    const [userMovies, setUserMovies] = useState([]);

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
        {isMovies ?  <CardsContainer movies = { userMovies } isHome={false} /> : <Empty/>}
      </>
    )
}

export default MyWatchListPage