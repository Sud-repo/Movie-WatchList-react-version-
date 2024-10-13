import { Link } from "react-router-dom";

function Footer(props) {

    let year = new Date().getFullYear();

    return (
        <footer className="text-center">
		<div className="container">
		<div className="row-title"> { props.title } </div>
		<div className="row">
			<div className="col-lg-12" style={{textAlign: "start", margin: "20px"}}>
				<h2 style={{fontSize: "1.5rem", textDecoration: "underline"}}>Quick Access</h2>
				<ul style={{padding: "0px 20px"}}>
					<li className="footer-list" ><Link className="footer-link" to="/home">Home</Link></li>
					<li className="footer-list"><Link className="footer-link" to="/watchlist">My WatchList</Link></li>
					<li className="footer-list"><Link className="footer-link" to="/add-movie">Add Movie</Link> </li>
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