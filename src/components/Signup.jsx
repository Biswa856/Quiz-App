import React, { useState, useEffect, useContext } from 'react'
import { QuizContext } from '../context/QuizHolder';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';

export default function Signup(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showHome, setShowHome] = useState(false)
    
    const { start, exit } = useContext(QuizContext)
    const localStorageSignupVal = localStorage.getItem("signup")
    

    useEffect(() => {
        if (localStorageSignupVal) {
            setShowHome(true)
        }
     
    })



    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && password) {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("signup", email);
            alert("Register Successful")
            window.location.reload()
        }

    }

    return (
        <div>
            {showHome ?
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
                        <h2>Signup</h2>
                        <form className='signup-form' onSubmit={handleSubmit}>
                            <label htmlFor="name">name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='your name' id='name' name='name' />
                            <label htmlFor="email">email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' id="email" name="email" />
                            <label htmlFor="password">password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*******' id="password" name="password" />
                            <button className='signup-btn' type='submit'>Register</button>
                        </form>
                        <button className='link-btn' onClick={() => props.onFormSwitch("login")}>Already Have an Account? Login here.</button>
                    </div>
                </div>
            }
        </div>
    )
}
