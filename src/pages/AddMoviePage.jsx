import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

function AddMoviePage() {

	const { showPopup, setLoading } = useOutletContext();
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

	async function addMovie(event) {
		event.preventDefault();
		try {
			setLoading(true) 
			const response = await fetch('/base-url/watchlist/include-movie', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
		const data = await response.json();
        if(response.ok) {
			showPopup(data.message, 'fa-solid fa-film')	
        }
        if (response.status === 500) {
            console.log("errorData", data);
            throw new Error(errorData.message || 'Internal Server Error');
        }
        if (!response.ok) {
            console.log('Response status:', response.status); 
            throw new Error('Network response was not ok');
        }
		} catch(error) {
			console.log(error);
			showPopup(error.message, 'fa-solid fa-circle-exclamation')
		} finally {
			setLoading(false)
		}
	}
  return (
    <div className="form-container">
		<h2 className="text-center" style={{fontWeight: 600}}>Add Movie To List</h2>
		<form id="movieForm">
			<div className="form-group">
				<i className="fa-solid fa-film fa-bounce" style={{color: '#d3ff13', fontSize: '15px', marginRight: '5px'}}></i>
				<label htmlFor="movie-url">Movie URL:</label>
				<input onChange={handleChange} type="text" className="form-control mb-4" id="movie-url" name="movieURL" placeholder="Enter Movie URL" />
			</div>
			<div className="form-group">
				<i className="fa-solid fa-language fa-bounce" style={{color: '#d3ff13', fontSize: '15px', marginRight: '5px'}}></i>
				<label htmlFor="movie-language">Movie Language:</label>
				<select onChange={handleChange} className="form-control mb-4" name="movieLanguage" id="movie-language">
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
			<button type="submit" className="btn btn-block form-button" 
				onClick={ e => addMovie(e, formData)}
			>Add Movie</button> 
		</form>
	</div>
  )
}

export default AddMoviePage