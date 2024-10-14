import React, { useState } from 'react';
import MovieButton from './MovieButton';
import { useOutletContext } from 'react-router-dom';


function MovieCard(props) {

    const { showPopup } = useOutletContext();

    async function addMovieToWatchList(isWatchLater, icon) {
        const param = isWatchLater ? "is-wl=true" : "is-w=true";
        try{
            const res = await fetch(`/base-url/movies/user-movie?id=${props.id}&${param}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const jsonRes = await res.json();
            if (res.status == 201 || res.status == 208) {
                console.log(jsonRes);
                showPopup(props.movieName + ': ' + jsonRes.message, icon)
            }
        } catch (error) {
            console.log('Error fetching Data: ' +error);
            showPopup('Error! Please Try Later', '')
        }
        //  finally {
        //     setLoading(false)
        // }
    }

    function removeMovieFromWatchList() {
        console.log('Remove movie!');
    }

  return ( <>
    <div className="col-lg-3 col-md-4 col-sm-6 flex-mywidth">
        <div className="movie-card">
            <div className="movie-image"
                style={{backgroundImage: `url(${props.imgUrl})`}}></div>
            <div className="card-content">
                <h2 className="movie-title limit-title" id="title">{props.movieName}</h2>
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

                        </div>
                    </div>
                </div>
                
            </div>
   
            <div className="mr-grid action-row">
            
                {props.isHome ? <MovieButton 
                    buttonId={'Button-1'} 
                    name='Watch Later'
                    addToWatchlist={addMovieToWatchList}
                    buttonStyle = 'fa-regular fa-hourglass-half fa-spin'
                /> :
                <MovieButton 
                    buttonId={'Button-1'} 
                    name='Remove'
                    addToWatchlist={removeMovieFromWatchList}
                    buttonStyle = 'fa-solid fa-trash fa-beat-fade'
                />
                }
                <MovieButton
                    buttonId={'Button-2'} 
                    name='Watched'
                    addToWatchlist={addMovieToWatchList}
                    buttonStyle = 'fa-solid fa-circle-check fa-beat-fade'
                />
            </div>
        {props.isWatched && <i className='fa-solid fa-circle-check watched-icon'></i>}
    </div>
    </>)
}

export default MovieCard;