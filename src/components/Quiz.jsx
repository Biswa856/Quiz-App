import React, { useState, useContext } from 'react'
import { QuizContext } from '../context/QuizHolder'

export default function Quiz() {
    const [currentQuiz, setCurrentQuiz] = useState(0)
    return (
        <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
            <Box currentQuiz={currentQuiz} next={setCurrentQuiz} />
        </div>
    )
}

const Box = ({ currentQuiz,next }) => {
    const { quizObj, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");

    const saveHandler = () => {
        console.log("clicked")
        if(quizObj[currentQuiz].correctIndex === ans){
            setCorrect(correct + 1);
        }
        setAns('');
        if((currentQuiz+1 )=== quizObj.length){
            setExit(true)
        }else{
            next(currentQuiz+1);
        }
       
    }

    return (
        <div className='w-[50%] min-h-[250px] shadow-lg rounded-md overflow-hidden p-5'>
            <div className='p-2 text-3xl' >{currentQuiz+1}) {quizObj[currentQuiz]?.question}</div>
            <div className='grid grid-cols-2 mt-3'>
                <div className={`p-2 border ${ans === "a" ? 'bg-blue-500 text-white' : ''} hover:bg-blue-400 
                hover:text-white duration-300 cursor-pointer`} onClick={()=>setAns("a")}>a. {quizObj[currentQuiz]?.a}</div>
                <div className={`p-2 border ${ans === "b" ? 'bg-blue-500 text-white' : ''} hover:bg-blue-400
                 hover:text-white duration-300 cursor-pointer`} onClick={()=>setAns("b")}>b. {quizObj[currentQuiz]?.b}</div>
                <div className={`p-2 border ${ans === "c" ? 'bg-blue-500 text-white' : ''} hover:bg-blue-400
                 hover:text-white duration-300 cursor-pointer`} onClick={()=>setAns("c")}>c. {quizObj[currentQuiz]?.c}</div>
                <div className={`p-2 border ${ans === "d" ? 'bg-blue-500 text-white' : ''} hover:bg-blue-400
                 hover:text-white duration-300 cursor-pointer`} onClick={()=>setAns("d")}>d. {quizObj[currentQuiz]?.d}</div>
            </div>
            <div className='flex justify-between p-4 mt-5'>
                <div className='h-[30px] border border-blue-700 rounded px-3 hover:bg-blue-500 hover:text-white cursor-pointer' onClick={()=>setAns("")}>Reset</div>
                <div className='h-[30px] border border-green-700 rounded px-3 hover:bg-green-600 hover:text-white cursor-pointer' onClick={saveHandler}>Save & Next</div>
                <div className='h-[30px] border border-red-600 rounded px-3 hover:bg-red-500 hover:text-white cursor-pointer'onClick={()=>setExit(true)}>Exit</div>
            </div>
        </div>
    )
}
