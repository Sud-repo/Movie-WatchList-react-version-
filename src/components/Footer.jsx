
function Footer(props) {

    let year = new Date().getFullYear();

    return (
        <footer className="text-center">
		<div className="container">
		<div className="row app-title"> { props.title } </div>
		<div className="row">
			<div className="col-lg-12" style={{textAlign: "start", margin: "20px"}}>
				<h2 style={{fontSize: "1.5rem", textDecoration: "underline"}}>Quick Access</h2>
				<ul style={{padding: "0px 20px"}}>
					<li className="footer-list" ><a className="footer-link" href="/movies/list">Home</a></li>
					<li className="footer-list"><a className="footer-link" href="/movies/user-watchlist">My WatchList</a></li>
					<li className="footer-list"><a className="footer-link" href="/movies/movie-form">Add Movie</a> </li>
				</ul>
			</div>
		</div>
		<hr style={{borderTop: "2px solid black", width: "100%"}} />
		<div className="row">
			<p>&copy; {year} Movie Watchlist</p>
		</div>
		</div>
	</footer> 
    )
}

export default Footer;