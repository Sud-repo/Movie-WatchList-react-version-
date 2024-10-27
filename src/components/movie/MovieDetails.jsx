import React from 'react';

function MovieDetails(props) {
  return (<>
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
    </>)
}

export default React.memo(MovieDetails);