import React from 'react';

function MovieFilter(props) {

    function applyFilter(event) {
        const filterValue = event.target.value;

        switch (filterValue) {
            case "all":
                props.onFilter('/base-url/movies/watchlist');
                break;
            case "watchLater":
                props.onFilter('/base-url/movies/watchlist?wl-filter=true');
                break;
            case "watched":
                props.onFilter('/base-url/movies/watchlist?w-filter=true');
                break;
            default:
                alert('select the given option from the filter.');
                console.log("No filter selected or Invalid Option");
        }
    }

  return (
    <div className="filter">
		<label className="filter-label" htmlFor="filterDropdown">Filter By:</label>
		<select defaultValue="none" className="fil-sel" id="filterDropdown" onChange={applyFilter}>
			<option hidden value="none">Choose</option>
			<option value="all">All</option>
			<option value="watchLater">Watch Later</option>
			<option value="watched">Watched</option>
		</select>
	</div>
  )
}

export default React.memo(MovieFilter);