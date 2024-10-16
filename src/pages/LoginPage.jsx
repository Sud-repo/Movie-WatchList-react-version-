import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import '../login.css'

function LoginPage() {

    const navigate = useNavigate();

    async function loginUser(event, requestData) {
        event.preventDefault();
        // Get the form element (assuming it's in a form element)
        const form = event.target.closest('form');

        // Check if the form is valid
        if (!form.checkValidity()) {
            form.reportValidity(); // This will show the browser's validation messages
            return; // Stop the function if the form is invalid
        }
        try {
            const response = await fetch('/base-url/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });
        let data;
        try {
            data = await response.json();
        } catch (e) {
            data = { message: 'No Response or Invalid JSON' };
        }
        if(response.ok) {
            navigate('/');
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
        console.log(error.message);
        alert('Login failed. Please try again.');
        }
    }

  return <Login onSubmit={loginUser} />
}

export default LoginPage