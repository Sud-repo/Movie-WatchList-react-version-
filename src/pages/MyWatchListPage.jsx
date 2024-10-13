import React, { useState, useEffect } from 'react'
import CardsContainer from '../components/CardsContainer';
import Empty from '../components/Empty';

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
        {isMovies ?  <CardsContainer movies = { userMovies } /> : <Empty/>}
      </>
    )
}

export default MyWatchListPage