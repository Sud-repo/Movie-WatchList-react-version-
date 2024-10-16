import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import '../login.css'

function LoginPage() {

    const navigate = useNavigate();

    async function loginUser(event, requestData) {
        event.preventDefault();
        const form = event.target.closest('form');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
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
            data = { message: 'No response or invalid JSON' };
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