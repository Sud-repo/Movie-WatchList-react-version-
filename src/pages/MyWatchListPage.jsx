import React from 'react'
import Empty from '../components/Empty';

function MyWatchListPage() {

    const userMovies = []
    let isMovies = userMovies.length === 0 ? false : true;

    return (
      <>
        {isMovies ?  <CardsContainer movies = { userMovies } /> : <Empty/>}
      </>
    )
}

export default MyWatchListPage