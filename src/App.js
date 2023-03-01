import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Login from './components/Login';
import Signup from './components/Signup';
import './styles/styles.css';
function App() {
  const[currentForm,setCurrentForm] = useState("signup")


  const toggleForm = (formName) =>{
    setCurrentForm(formName)
  }
  return (
    <>
     <Helmet><title>Quiz App</title></Helmet>

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
