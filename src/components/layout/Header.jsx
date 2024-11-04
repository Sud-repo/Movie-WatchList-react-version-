import React from "react";

function Header({title}) {

    return (
    <header>
		<h1 className="text-center m-1 main-title">{title}</h1>
	</header>)
}

export default Header;