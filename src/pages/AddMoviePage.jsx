import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import AddMovieForm from '../components/movie/AddMovieForm';
import Loader from '../components/Loader';

function AddMoviePage() {

	const { showPopup } = useOutletContext();
	const [isLoading, setLoading] = useState(false);

	async function addMovie(event, formData) {
		event.preventDefault();
		const form = event.target.closest('form');
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
			showPopup(data.message, 'fa-solid fa-film')	
			form.reset();
        }
        if (response.status === 500) {
            console.error("Error: ", data.message);
            throw new Error('Internal Server Error');
        }
        if (!response.ok) {
            console.error('Response status:', response.status); 
            throw new Error('Network response was not ok: ' +data.message);
        }
		} catch(error) {
			console.error(error);
			showPopup(error.message, 'fa-solid fa-circle-exclamation')
		} finally {
			setLoading(false)
		}
	}
  return (<>
	{ isLoading && <Loader /> }
    <AddMovieForm onFormSubmit={addMovie}/>
	</>)
}

export default AddMoviePage