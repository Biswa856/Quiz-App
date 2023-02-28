import React, { Fragment, useContext } from 'react'
import { Helmet } from 'react-helmet';
import { QuizContext } from '../context/QuizHolder';
export default function Home() {
    const { setStart } = useContext(QuizContext)

    const logout = () =>{
        localStorage.removeItem("signup")
        window.location.reload()
    }

    return (

        <Fragment>
            <Helmet><title>Quiz App</title></Helmet>
            <div id='home'>
                <section>
                    <div className='w-full h-screen flex justify-center items-center'>
                        <button onClick={logout} className='border border-orange-500 p-3 text-4xl rounded hover:bg-red-500 hover:text-white' >logout</button>
                        <button onClick={() => setStart(true)} className='border border-orange-500 p-3 text-4xl rounded hover:bg-orange-500 hover:text-white' >Start</button>
                    </div>
                </section>
            </div>
        </Fragment>
    );

} 