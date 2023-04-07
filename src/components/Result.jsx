import React,{useContext} from 'react'
import { QuizContext } from '../context/QuizHolder'

export default function Result() {
    const{quizObj,correct,setStart,setExit,attempt,setAttempt,setCorrect} = useContext(QuizContext)

    const playAgain= () => {
        setStart(false)
        setExit(false)
        setAttempt(0)
        setCorrect(0)
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
    <div className='w-full h-screen flex justify-center items-center bg-slate-50 ' style={{backgroundImage:"url('https://cdn.pixabay.com/photo/2019/10/09/06/06/gift-4536515_960_720.png')"}}>
        <div className='w-[50%] min-h-[250px] shadow-lg rounded-md overflow-hidden p-5 text-center text-2xl'>
            Report Card

        <h2 className='text-xl'>Total number of questions : {quizObj.length}</h2>  
        <h2 className='text-xl'>Correct Attempt : {correct} </h2>
        <h2 className='text-xl'>Wrong Attempt : {attempt - correct}</h2> 
        <h2 className='text-xl'>Number Of Questions Not Attempt:{quizObj.length-attempt}</h2>
        <button onClick={playAgain} className='border bg-red-500 mt-10 px-2 rounded hover:bg-rose-500 hover:text-white'>Play Again</button> 
        </div>
        
    </div>
    </div>
    </div>
  )
}
