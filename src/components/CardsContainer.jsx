import React from 'react'
import MovieCard from './MovieCard';


function CardsContainer(props) {
  return (
    <div className="container mt-5">
	  	<div className="row">
            {props.movies.map(movie => {
                return <MovieCard 
                    key = {movie.id}
                    id = {movie.idMovieInfo}
                    title = {movie.moiveName}
                    description = {movie.description}
                    year = {movie.releaseYear}
                    duration = {movie.runtime}
                    imgUrl = {movie.thumbnailURL}
                    review = {movie.reviewRating}
                    movieRating = {movie.movieRating}
                    genres = {movie.genre}
                    language = {movie.language}
                />;
            })}
	  	</div>
	  </div>
  )
}

export default CardsContainer
