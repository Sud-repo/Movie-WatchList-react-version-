import React, { useState, useEffect, useRef } from 'react'
import MovieCard from './MovieCard';
import PopUp from "../popup/PopUp";


function CardsContainer(props) {

  return (
    <>
    <div className="container mt-5">
	  	<div className="row">
            {props.movies.map(movie => {
                return <MovieCard 
                    key = { isNaN(movie.idMovieInfo) ? atob(movie.idMovieInfo) : movie.idMovieInfo}
                    id = {movie.idMovieInfo}
                    moiveName = {movie.moiveName}
                    description = {movie.description}
                    year = {movie.releaseYear}
                    duration = {movie.runtime}
                    imgUrl = {movie.thumbnailURL}
                    review = {movie.reviewRating}
                    movieRating = {movie.movieRating}
                    genre = {movie.genre}
                    language = {movie.language}
                    isHome={props.isHome}
                />;
            })}
	  	</div>
	  </div>

  </>
  )
}

export default CardsContainer
