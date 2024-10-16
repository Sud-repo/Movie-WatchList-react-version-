import React, {useState} from 'react'

function Login(props) {

    const [showPassword, setShowPassword] = useState(false);

    function handleClick() {
        setShowPassword(prev => !prev)
    }

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

    let eyeStyle = showPassword ? "fa-regular fa-eye eye-pos" : "fa-regular fa-eye-slash eye-pos";

  return (
    <div className='login-container'>
    <div className="login-box">
        <h2>Login</h2>
        <form>
            <div className="user-box">
            <input onChange={handleChange} 
                    onFocus={() => setUFocused(true)} 
                    onBlur={() => setUFocused(false)} 
                    type="text" name="username" required 
                    autoComplete="username" />
            <label className={uFocused || formData.username ? 'a-label' : ''} >Username</label>
            </div>
            <div className="user-box">
            <input onChange={handleChange} 
                    onFocus={() => setPFocused(true)} 
                    onBlur={() => setPFocused(false)} 
                    type={showPassword ? "text" : "password"} name="password" required 
                    autoComplete="current-password" />
            <label className={pFocused || formData.password ? 'a-label' : ''} >Password</label>
            </div>
            <button type="submit" onClick={(event) => props.onSubmit(event, formData)} >
            Submit
            </button>
            <i className={eyeStyle} onClick={handleClick}></i>
        </form>
    </div>
    </div>
  )
}

export default Login