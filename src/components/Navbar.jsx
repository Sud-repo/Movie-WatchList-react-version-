
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
					<a className="nav-link" href="#">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">My WatchList</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Add Movie</a>
				</li>
			</ul>
		</div>
	</nav>
    )
}

export default Navbar;