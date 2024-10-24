import React from "react";

function Header({title}) {
  console.log("Header");
    return (
    <header>
		<h1 className="text-center m-1 main-title">{title}</h1>
	</header>)
}

export default React.memo(Header);