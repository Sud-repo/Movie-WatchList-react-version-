import React, { useState } from 'react';

function AddMovieForm({ onFormSubmit }) {

    const [formData, setFormData] = useState({
		movieURL: '',
		movieLanguage: '',
	})

	function handleChange(event) {
		let {name, value} = event.target;
		setFormData(prev => {
			return { ...prev, [name]: value }
		});
	}

    function handleSubmit(e) {
        onFormSubmit(e, formData);
        setFormData({movieURL: '', movieLanguage: ''});
    }

  return (
    <div className="form-container">
		<h2 className="text-center" style={{fontWeight: 600}}>Enter Movie Details</h2>
		<form id="movieForm">
			<div className="form-group">
				<i className="fa-solid fa-film fa-bounce" ></i>
				<label htmlFor="movie-url">Movie URL :</label>
				<input onChange={handleChange}
						type="text" 
						className="form-control mb-4" 
						id="movie-url" 
						name="movieURL" 
						placeholder="Enter Movie URL" 
						required/>
			</div>
			<div className="form-group">
				<i className="fa-solid fa-language fa-bounce" ></i>
				<label htmlFor="movie-language">Movie Language :</label>
				<select onChange={handleChange} value={formData.movieLanguage} placeholder="Enter Movie Language" className="form-control mb-4" name="movieLanguage" id="movie-language" required>
					<option disabled value="" >Enter Movie Language</option>
					<option >English</option>
					<option>Tamil</option>
					<option>Kannada</option>
					<option>Hindi</option>
					<option>Malayalam</option>
					<option>Telugu</option>
					<option>Other</option>
				</select>
			</div>
			<button type="submit" className="btn btn-block form-button" 
				onClick={e => handleSubmit(e)}
			>Add Movie</button> 
		</form>
	</div>
  )
}

export default AddMovieForm