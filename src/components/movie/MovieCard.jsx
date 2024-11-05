import React, { useState } from 'react';
import WatchlistButtons from './WatchlistButtons';
import HomeButtons from './HomeButtons';
import MovieDetails from './MovieDetails';
import Loader from '../Loader';


function MovieCard(props) {
    
    const [isLoading, setLoading] = useState(false);

  return ( <>
    <div className="col-lg-3 col-md-4 col-sm-6 flex-mywidth">
        <div className='watched-icon'>

        </div>
        <div className="movie-card">
            <MovieDetails 
                movieName = {props.movieName}
                description = {props.description}
                year = {props.year}
                duration = {props.duration}
                imgUrl = {props.imgUrl}
                review = {props.review}
                movieRating = {props.movieRating}
                genre = {props.genre}
             />
        </div>
            <div className="mr-grid action-row">
                {props.isHome ? <HomeButtons 
                    id={props.id}
                    movieName={props.movieName}
                    showLoading={setLoading}
                /> : <WatchlistButtons 
                    id={props.id}
                    movieName={props.movieName}
                    isDisabled={props.isWatched}
                    showLoading={setLoading}
                />
                } 
            </div>   
    </div>
    {isLoading && <Loader />}
    </>)
}

export default React.memo(MovieCard);