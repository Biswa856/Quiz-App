import React, { Fragment, useContext } from 'react'
import { Helmet } from 'react-helmet';
import { QuizContext } from '../context/QuizHolder';
export default function Home() {
    const { setStart,setShowLogin } = useContext(QuizContext)

    const logout = () =>{
        localStorage.removeItem("signup")
        setShowLogin(false)
        window.location.reload()

    }

    return (

        <Fragment>
            <Helmet><title>Quiz App</title></Helmet>
            <div id='home'>
                <section>
                    <div className='w-full h-15 bg-blue-400 flex justify-end p-3'>
                    <button onClick={logout} className='border border-orange-500 px-2 py-1 text-xl rounded hover:bg-red-500 text-white' >logout</button>
                    </div>
                    <div className='w-full h-screen flex justify-center items-center'>
                        
                        <button onClick={() => setStart(true)} className='border border-orange-500 p-3 text-4xl rounded hover:bg-orange-500 hover:text-white' >Start</button>
                    </div>
                </section>
            </div>
        </Fragment>
    );

} 