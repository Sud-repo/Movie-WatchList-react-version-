import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-header">
		{/* <a className="navbar-brand nav-title" href="/movies/list">{ props.title }</a> */}
		<button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
			aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse nav-align" id="navbarNav">
			<ul className="navbar-nav">
				<li className="nav-item active">
					<Link className="nav-link" to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/watchlist">My WatchList</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/add-movie">Add Movie</Link>
				</li>
			</ul>
		</div>
	</nav>
    )
}

export default Navbar;