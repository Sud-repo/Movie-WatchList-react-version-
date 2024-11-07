import { useNavigate } from 'react-router-dom';
import Login from '../components/auth/Login';
import '../login.css'

function LoginPage() {

    const navigate = useNavigate();

    async function loginUser(event, username, password) {
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
            body: JSON.stringify({username, password}),
        });
        let data;
        try { data = await response.json(); } 
        catch (e) { data = { message: 'No response or invalid JSON' }; }
        if(response.ok) {
            navigate('/');
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
        console.error(error.message);
        alert('Login failed. Please try again.');
        }
    }

  return <Login onSubmit={loginUser} />
}

export default LoginPage