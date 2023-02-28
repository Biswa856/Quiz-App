import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../context/QuizHolder';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLogin, setShowLogin] = useState(false)
    const localStorageEmail = localStorage.getItem("email")
    const localStorageName = localStorage.getItem("name")
    const localStoragePassword = localStorage.getItem("password")
    const { start, exit } = useContext(QuizContext)

    useEffect(() => {
        if (localStorageEmail) {
            setShowLogin(true)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(localStorageEmail===email && localStoragePassword===password)
        localStorage.setItem("signup",email)
        alert("Login Successful")
        window.location.reload()


    }

    return (
        <>{
            showLogin ?
            <>
            {exit === false ?
                <>
                    {
                        start === true
                            ? <Quiz />
                            : <Home />
                    }
                </>
                : <Result />}</>
        :
            
                <div className='app'>
                    <div className='auth-form-container'>
                        <h2>hello {localStorageName} please Login</h2>
                        <form className='login-form' onSubmit={handleSubmit}>
                            <label htmlFor="email">email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' id="email" name="email" />
                            <label htmlFor="password">password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*******' id="password" name="password" />
                            <button className='login-btn' type='submit'>Log in</button>
                        </form>
                        <button className='link-btn' onClick={() => props.onFormSwitch("signup")}>Don't Have an Account? Register here.</button>
                    </div>
                </div>
        }
        </>
    )
}
