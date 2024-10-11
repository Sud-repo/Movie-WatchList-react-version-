import React, {useState} from 'react'

function Login(props) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [uFocused, setUFocused] = useState(false);
    const [pFocused, setPFocused] = useState(false);

    function handleChange(event) {
        let {name, value} = event.target
        setFormData( prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

  return (
    <div className='login-container'>
    <div className="login-box">
        <h2>Login</h2>
        <form>
            <div className="user-box">
            <input onChange={handleChange} 
                    onFocus={() => setUFocused(true)} 
                    onBlur={() => setUFocused(false)} 
                    type="text" name="username" required />
            <label className={uFocused || formData.username ? 'a-label' : ''} >Username</label>
            </div>
            <div className="user-box">
            <input onChange={handleChange} 
                    onFocus={() => setPFocused(true)} 
                    onBlur={() => setPFocused(false)} 
                    type="password" name="password" required />
            <label className={pFocused || formData.password ? 'a-label' : ''} >Password</label>
            </div>
            <button onClick={(event) => props.onSubmit(event, formData)} >
            Submit
            </button>
        </form>
    </div>
    </div>
  )
}

export default Login