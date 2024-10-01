import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  const appTitle = 'Movie Watchlist'

  return (
    <>
      <Header title={ appTitle } />
      <Navbar title = { appTitle } />

	{/* <div className="container mt-5">
		<div className="row">

			<div className="col-lg-3 col-md-4 col-sm-6 flex-mywidth" th:each="movie : ${movies}">
				<div className="movie-card">
					<div className="movie-image"
						th:style=" 'background-image: url(' + @{${movie.thumbnailURL}} + ');' "></div>
					<div className="card-content">
						<h2 className="movie-title limit-title" id="title" th:text="${movie.moiveName}"></h2>
						<div className="text-movie-cont movie-detail">
							<div className="mr-grid">
								<div className="col1">
									<ul className="movie-gen">
										<li th:text="${movie.releaseYear}+ '&nbsp;' + '  | '"></li>
										<li th:text="${movie.movieRating}+ '&nbsp;' + '  | '"></li>
										<li th:text="${movie.runtime}+ '&nbsp;' + '  | '"></li>
										<li th:text="${movie.genre}"></li>
									</ul>
								</div>
							</div>
							<div className="mr-grid summary-row">
								<div className="row" style="margin: 0px;">
									<div className="col2" style="padding: 0px;">
									<h5 className="movie-name" >SUMMARY:</h5>
								</div>
								<div className="col2 movie-rating"><i className="fa-solid fa-star fa-flip rating-text"></i>
									<span className="rating-text" th:text="${movie.reviewRating} + ' / 10'"><i className="fa-solid fa-star"></i>
									</span>
								</div>
							</div>
								<div className="mr-grid">
									<div className="col1">
										<p className="movie-description" th:title="${movie.description}" th:text="${movie.description}"></p>
									</div>
								</div>

								<div className="mr-grid action-row">
								<button className="button-effect button1" th:id=" '1_Button_' + ${movie.idMovieInfo}"
									th:onclick="addMovieToWatchLater([[${movie.idMovieInfo}]], [[${movie.moiveName}]])">
									<i className="fa-regular fa-hourglass-half fa-spin" style="font-size: 11px;"></i> &nbsp; Watch Later</button>

								<button className="button-effect button2" th:id=" '2_Button_' + ${movie.idMovieInfo}"
									th:onclick="addMovieToWatched([[${movie.idMovieInfo}]], [[${movie.moiveName}]]) ">
									<i className="fa-solid fa-circle-check fa-beat-fade" style="font-size: 11px;"></i> &nbsp; Watched</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> */}

	{/* <div className="popup">
		<i className="fa-regular fa-hourglass-half" id="wl-b" style="color: #d3ff13;font-size: 20px;margin-right: 10px; display: none;"></i> 
		<i className="fa-solid fa-circle-check" id="w-b" style="color: #d3ff13;font-size: 20px;margin-right: 10px; display: none;"></i> 
		<p className="message"> pop up message </p>
	</div> */}
      <Footer title= { appTitle } />
	
    </>
  )
}

export default App
