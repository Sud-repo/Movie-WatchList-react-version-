import React, { useState } from 'react';
import HomeButtons from './HomeButtons';
import WatchlistButtons from './WatchlistButtons'

function MovieCard(props) {

  return ( <>
    <div className="col-lg-3 col-md-4 col-sm-6 flex-mywidth">
        <div className="movie-card">
            <div className="movie-image"
                style={{backgroundImage: `url(${props.imgUrl})`}}></div>
            <div className="card-content">
                <h2 className="movie-title limit-title" id="title">{props.moiveName}</h2>
                <div className="text-movie-cont movie-detail">
                    <div className="mr-grid">
                        <div className="col1">
                            <ul className="movie-gen">
                                <li > {props.year + '  |  '} </li>
                                <li > {props.movieRating + '  |  '} </li>
                                <li > {props.duration +  '  |  '} </li>
                                <br />
                                <li > {props.genre} </li>
                            </ul>
                        </div>
                    </div> 
                    <div className="mr-grid summary-row">
                        <div className="row" style={{margin: "0px"}}>
                            <div className="col2" style={{padding: "0px"}}>
                            <h5 className="movie-name" >SUMMARY:</h5>
                        </div>
                        <div className="col2 movie-rating"><i className="fa-solid fa-star fa-flip rating-text"></i>
                            <span className="rating-text"> {props.review + ' / 10'}
                            </span>
                        </div>
                    </div>
                        <div className="mr-grid">
                            <div className="col1">
                                <p className="movie-description" title={props.description}> {props.description} </p>
                            </div>
                        </div>

                        
                        

                        {/* <button className="button-effect button-m" id={'1_Button_' + props.idMovieInfo}
                            onClick="addMovieToWatchLater({movie.idMovieInfo}, {movie.moiveName})">
                            <i className={buttonStyle} style={{fontSize: '11px'}}></i> &nbsp; Watch Later</button> 

                        <button className="button-effect button-m" id={'2_Button_' + props.idMovieInfo}
                            onClick="addMovieToWatched({movie.idMovieInfo}, {movie.moiveName}) ">
                            <i className="fa-solid fa-circle-check fa-beat-fade" style={{fontSize: '11px'}}></i> &nbsp; Watched</button> */}
                        </div>
                    </div>
                </div>
                
            </div>
        
   
    <div className="mr-grid action-row">
                        {
                            props.isHome ? <HomeButtons 
                            id={props.id}
                            movieName={props.moiveName + ': '}
                            onAdd={props.onAdd}
                         /> : <WatchlistButtons />
                        }
                        </div>
</div>
    </>)
}

export default MovieCard;