import React from 'react';

function MovieCard(props) {

    let movieImageStyle = {
        backgroundImage: `url(${props.imgUrl})`
    }

  return (
			<div className="col-lg-3 col-md-4 col-sm-6 flex-mywidth">
				<div className="movie-card">
					<div className="movie-image"
						style={movieImageStyle}></div>
					<div className="card-content">
						<h2 className="movie-title limit-title" id="title">{props.title}</h2>
						<div className="text-movie-cont movie-detail">
							{/*<div className="mr-grid">
								<div className="col1">
									<ul className="movie-gen">
										<li th:text="${movie.releaseYear}+ '&nbsp;' + '  | '"></li>
										<li text={props.}+ '&nbsp;' + '  | '></li>
										<li text="{props.duration + '&nbsp;' + '  | '}"></li>
										<li text="{props.genre}"></li>
									</ul>
								</div>
							</div> */}
							<div className="mr-grid summary-row">
								<div className="row" style={{margin: "0px"}}>
									<div className="col2" style={{padding: "0px"}}>
									<h5 className="movie-name" >SUMMARY:</h5>
								</div>
								<div className="col2 movie-rating"><i className="fa-solid fa-star fa-flip rating-text"></i>
									<span className="rating-text"> {props.review + ' / 10'} <i className="fa-solid fa-star"></i>
									</span>
								</div>
							</div>
								<div className="mr-grid">
									<div className="col1">
										<p className="movie-description" title={props.description}> {props.description} </p>
									</div>
								</div>

								{/* <div className="mr-grid action-row">
								<button className="button-effect button1" id={'1_Button_' + props.idMovieInfo}
									th:onclick="addMovieToWatchLater([[${movie.idMovieInfo}]], [[${movie.moiveName}]])">
									<i className="fa-regular fa-hourglass-half fa-spin" style="font-size: 11px;"></i> &nbsp; Watch Later</button>

								<button className="button-effect button2" id={'2_Button_' + props.idMovieInfo}
									th:onclick="addMovieToWatched([[${movie.idMovieInfo}]], [[${movie.moiveName}]]) ">
									<i className="fa-solid fa-circle-check fa-beat-fade" style="font-size: 11px;"></i> &nbsp; Watched</button>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default MovieCard;