import React, { Fragment, useContext } from 'react'
import { QuizContext } from '../context/QuizHolder';
import Animation from './Animation';
// import styles from '../styles/styles.css'
export default function Home() {
    const { setStart, setShowLogin } = useContext(QuizContext)

    const logout = () => {
        localStorage.removeItem("signup")
        setShowLogin(false)
        window.location.reload()

    }

    return (

        <div className='animation-body'>
            <div className='container'>
                <div className='bubbles'>
                    <span style={{ '--i': 10 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 30 }}></span>
                    <span style={{ '--i': 25 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 30 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 23 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 30 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 19 }}></span>
                    <span style={{ '--i': 10 }}></span>
                    <span style={{ '--i': 23 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 21 }}></span>
                    <span style={{ '--i': 25 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 29 }}></span>
                    <span style={{ '--i': 30 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 26 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 16 }}></span>
                    <span style={{ '--i': 26 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 27 }}></span>
                    <span style={{ '--i': 23 }}></span>
                    <span style={{ '--i': 29 }}></span>
                    <span style={{ '--i': 28 }}></span>
                    <span style={{ '--i': 35 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 28 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 16 }}></span>
                    <span style={{ '--i': 26 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 27 }}></span>
                </div>
                
                    <div className='h-15 w-screen top-0 bg-purple-500 flex justify-end p-3 absolute'>
                        <button onClick={logout} className='border border-orange-500 px-2 py-1 text-xl rounded hover:bg-red-500 text-white' >logout</button>
                    </div>
                    <div className='h-[80vh] w-screen bottom-0 flex justify-center items-center flex-col gap-5 absolute'>

                        <button onClick={() => setStart(true)} className='border border-purple-600 p-3 text-4xl rounded hover:bg-purple-500 hover:text-white' >Play Now</button>

                        {/* <div className='outerBar'>
                            <div className='innerBody'></div>

                        </div> */}
                    </div>


               


            </div>
        </div>


    );

} 