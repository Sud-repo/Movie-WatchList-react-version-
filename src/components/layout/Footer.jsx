import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {

    let year = new Date().getFullYear();
	console.log("Footer");
	

    return (
        <footer className="text-center">
		<div className="container">
		<div className="row-title"> { props.title } </div>
		<div className="row">
			<div className="col-lg-12" style={{textAlign: "start", margin: "15px 0px", padding:"0px"}}>
				<h2 style={{fontSize: "1.5rem", textDecoration: "underline"}}>Quick Access</h2>
				<ul style={{padding: "10px"}}>
					<li className="footer-list" ><Link className="footer-link" to="/"> <i className="fa-solid fa-angle-right"></i> Home</Link></li>
					<li className="footer-list"><Link className="footer-link" to="/watchlist"> <i className="fa-solid fa-angle-right"></i> My WatchList</Link></li>
					<li className="footer-list"><Link className="footer-link" to="/add-movie"> <i className="fa-solid fa-angle-right"></i> Add Movie</Link> </li>
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

export default React.memo(Footer);