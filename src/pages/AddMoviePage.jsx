import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

function AddMoviePage() {

	const { showPopup, setLoading } = useOutletContext();
	const [formData, setFormData] = useState({
		movieURL: '',
		movieLanguage: '',
	})
	const [errorLabel, setErrorLabel] = useState(false);

	function handleChange(event) {
		let {name, value} = event.target;
		setFormData(prev => {
			return { ...prev, [name]: value }
		});
	}

	async function addMovie(event) {
		event.preventDefault();
		const form = event.target.closest('form');
		if(formData.movieLanguage === "") {
			setErrorLabel(true);
			setTimeout( () => { setErrorLabel(false) }, 1000)
            return;
		}
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
		try {
			setLoading(true) 
			const response = await fetch('/base-url/watchlist/include-movie', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
		let data;
        try { data = await response.json(); } 
		catch (e) { data = { message: 'No response or invalid JSON' }; }
        if(response.ok) {
			console.log('okkk')
			showPopup(data.message, 'fa-solid fa-film')	
			form.reset();
			setFormData({movieURL: '', movieLanguage: ''})
        }
        if (response.status === 500) {
            console.log("Error: ", data.message);
            throw new Error('Internal Server Error');
        }
        if (!response.ok) {
            console.log('Response status:', response.status); 
            throw new Error('Network response was not ok: ' +data.message);
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
				<i className="fa-solid fa-film fa-bounce" ></i>
				<label htmlFor="movie-url">Movie URL:</label>
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
				<label style={errorLabel ? { color: 'red' } : {} }  htmlFor="movie-language">Movie Language:</label>
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
				onClick={ e => addMovie(e, formData)}
			>Add Movie</button> 
		</form>
	</div>
  )
}

export default AddMoviePage