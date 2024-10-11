import { NavLink } from "react-router-dom";

function Navbar() {

	const linkStyle = ({ isActive }) => isActive ? "nav-link active-link" : "nav-link";

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
					<NavLink className={linkStyle} to="/app/home">Movies</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className={linkStyle} to="/app/watchlist">WatchList</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className={linkStyle} to="/app/add-movie">Add Movie</NavLink>
				</li>
			</ul>
		</div>
	</nav>
    )
}

export default Navbar;