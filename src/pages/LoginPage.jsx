import React, {useState} from 'react'
import Login from '../components/Login';
import '../login.css'

function LoginPage() {

    async function loginUser(event, requestData) {
        event.preventDefault();
        try {
            const response = await fetch('/base-url/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });
        const data = await response.json();
        if(response.ok) {
            window.location.href='/app/home'
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
        alert(error.message || 'Login failed. Please try again.');
        }
    }

  return <Login onSubmit={loginUser} />
}

export default LoginPage