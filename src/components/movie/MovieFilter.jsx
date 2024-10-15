import React from 'react'

function MovieFilter() {
  return (
    <div class="filter">
		<label class="filter-label" for="filterDropdown">Filter By:</label>
		<select class="fil-sel" id="filterDropdown" onchange="applyFilter()">
			<option hidden selected value="none">Choose</option>
			<option value="all">All</option>
			<option value="watchLater">Watch Later</option>
			<option value="watched">Watched</option>
		</select>
	</div>
  )
}

export default MovieFilter