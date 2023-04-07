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
    <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
        <div className='w-[50%] min-h-[250px] shadow-lg rounded-md overflow-hidden p-5 text-center text-2xl'>
            Report Card

        <h2 className='text-xl'>Total number of questions : {quizObj.length}</h2>  
        <h2 className='text-xl'>Correct Attempt : {correct} </h2>
        <h2 className='text-xl'>Wrong Attempt : {attempt - correct}</h2> 
        <h2 className='text-xl'>Number Of Questions Not Attempt:{quizObj.length-attempt}</h2>
        <button onClick={playAgain} className='border bg-red-500 mt-10 px-2 rounded hover:bg-rose-500 hover:text-white'>Play Again</button> 
        </div>
        
    </div>
  )
}
