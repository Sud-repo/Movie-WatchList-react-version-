import React, {useState, useRef} from 'react'

function Login(props) {

    const [showPassword, setShowPassword] = useState(false);

    function handleClick() {
        setShowPassword(prev => !prev)
    }
    const userNameRef = useRef('');
    const passwordRef = useRef('');
    const [uFocused, setUFocused] = useState(false);
    const [pFocused, setPFocused] = useState(false);
    console.log(userNameRef)
    let eyeStyle = showPassword ? "fa-regular fa-eye eye-pos" : "fa-regular fa-eye-slash eye-pos";

  return (
    <div className='login-container'>
    <div className="login-box">
        <h2>Login</h2>
        <form>
            <div className="user-box">
            <input ref={userNameRef}
                    onFocus={() => setUFocused(true)} 
                    onBlur={() => setUFocused(false)} 
                    type="text" name="username" required 
       function             autoComplete="username" />
            <label className={uFocused || userNameRef.current.value ? 'a-label' : ''} >Username</label>
            </div>
            <div className="user-box">
            <input ref={passwordRef}
                    onFocus={() => setPFocused(true)} 
                    onBlur={() => setPFocused(false)} 
                    type={showPassword ? "text" : "password"} name="password" required 
                    autoComplete="current-password" />
            <label className={pFocused || passwordRef.current.value ? 'a-label' : ''} >Password</label>
            </div>
            <button type="submit" onClick={(event) => props.onSubmit(event, userNameRef.current.value, passwordRef.current.value)} >
            Submit
            </button>
            <i className={eyeStyle} onClick={handleClick}></i>
        </form>
    </div>
    </div>
  )
}

export default Login