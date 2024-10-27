import React from 'react';
import MovieCard from './MovieCard';


function CardsContainer(props) {

  return (
    <>
    <div className="container mt-5">
	  	<div className="row">
            {props.movies.map(movie => {
                return <MovieCard 
                    key = { isNaN(movie.idMovieInfo) ? atob(movie.idMovieInfo) : movie.idMovieInfo}
                    id = {movie.idMovieInfo}
                    movieName = {movie.movieName}
                    description = {movie.description}
                    year = {movie.releaseYear}
                    duration = {movie.runtime}
                    imgUrl = {movie.thumbnailURL}
                    review = {movie.reviewRating}
                    movieRating = {movie.movieRating}
                    genre = {movie.genre}
                    language = {movie.language}
                    isHome={props.isHome}
                    isWatchLater={movie.isWatchLater}
                    isWatched={movie.isWatched}
                />;
            })}
	  	</div>
	  </div>

  </>
  )
}

export default CardsContainer
