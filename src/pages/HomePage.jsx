import React, {useState, useEffect, useRef} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import CardsContainer from "../components/movie/CardsContainer";
import Empty from '../components/movie/Empty';
import Loader from '../components/Loader'
import MoiveLoader from '../components/MoiveLoader';


function HomePage() {

  const [movies, setMovies] = useState(null);
  const hasMore = useRef(true);
  const pageNo = useRef(0);
  const initialFetchDone = useRef(false);

  useEffect(() => {
    if (!initialFetchDone.current || pageNo.current !== 0) {
      fetchMovies();
      initialFetchDone.current = true;
    }
  }, []);

  async function fetchMovies() {
    try {
      const res = await fetch(`/base-url/movies?page-no=${pageNo.current}`);
      if (!res.ok) throw new Error(`Status - ${res.status} ${res.statusText}`);
      const jsonRes = await res.json();
      if (jsonRes.isLast) hasMore.current =false;
      if (jsonRes.data !== null) setMovies((prevMovies) => {
        // if (prevMovies != null) 
          [...prevMovies, ...jsonRes.data]
      });
      pageNo.current = pageNo.current+1;
    } catch (error) {
      console.error(error);
      setMovies([]);
      hasMore.current =false;
    }
  }

  return (
    <>
      {movies === null ? <> 
          <div className='Empty-space'></div> <Loader /> 
        </> : movies.length > 0 ? (
          <InfiniteScroll
          dataLength={movies.length}
          next={fetchMovies}
          hasMore={hasMore.current}
          loader={<MoiveLoader />}
          endMessage={<div>End</div>}
        >
          <CardsContainer movies={movies} isHome={true} />
        </InfiniteScroll>
      ) : (
        <Empty />
      )}
    </>
  )
}

export default HomePage