import React from 'react'

function AddMoviePage() {
  return (
    <div className="form-container">
		<h2 className="text-center" style={{fontWeight: 600}}>Add Movie To List</h2>
		<form id="movieForm">
			<div className="form-group">
				<i className="fa-solid fa-film fa-bounce" style={{color: '#d3ff13', fontSize: '15px', marginRight: '5px'}}></i>
				<label htmlFor="movie-url">Movie URL:</label>
				<input type="text" className="form-control mb-4" id="movie-url" placeholder="Enter Movie URL" />
			</div>
			<div className="form-group">
				<i className="fa-solid fa-language fa-bounce" style={{color: '#d3ff13', fontSize: '15px', marginRight: '5px'}}></i>
				<label htmlFor="movie-language">Movie Language:</label>
				<select className="form-control mb-4" id="movie-language">
					<option hidden>Enter Movie Language</option>
					<option>English</option>
					<option>Tamil</option>
					<option>Kannada</option>
					<option>Hindi</option>
					<option>Malayalam</option>
					<option>Telugu</option>
					<option>test-case</option>
				</select>
			</div>
			<button type="submit" className="btn btn-block form-button" >Add Movie</button> 
            {/* onclick="showLoader()" */}
		</form>
	</div>
  )
}

export default AddMoviePage