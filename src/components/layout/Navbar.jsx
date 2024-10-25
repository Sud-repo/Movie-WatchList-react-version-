import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {

	const linkStyle = ({ isActive }) => isActive ? "nav-link active-link" : "nav-link";

	const location = useLocation();
	const navbarTogglerRef = useRef(null);

	const closeNavbar = () => {
		const navbarCollapse = document.getElementById('navbarNav');
		if (navbarCollapse.classList.contains('show')) {
		navbarTogglerRef.current.click();
		}
	};

	useEffect(() => {
		closeNavbar();
	}, [location]);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-header">
		{/* // add Logo here <a className="navbar-brand nav-title" href="/movies/list">{ props.title }</a> */}
		<button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
			aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" ref={navbarTogglerRef}>
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse nav-align" id="navbarNav">
			<ul className="navbar-nav">
				<li className="nav-item active">
					<NavLink className={linkStyle} to="/">Movies</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className={linkStyle} to="/watchlist">WatchList</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className={linkStyle} to="/add-movie">Add Movie</NavLink>
				</li>
			</ul>
		</div>
	</nav>
    )
}

export default React.memo(Navbar);