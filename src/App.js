import React, {useState} from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import QuizHolder, { QuizContext } from './context/QuizHolder';
import { useContext } from 'react';
import './styles/styles.css'
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  const[currentForm,setCurrentForm] = useState("signup")


  const toggleForm = (formName) =>{
    setCurrentForm(formName)
  }
  return (
    <>
    <div>
      {
        currentForm==="signup" ? <Signup onFormSwitch={toggleForm}/>  : <Login onFormSwitch={toggleForm} /> 
      }
    
    </div>
    
    

      {/* {exit === false ?
        <>
          {
            start === true
              ? <Quiz />
              : <Home />
          }
        </>
        : <Result />} */}



    </>

  );
}

export default App;
