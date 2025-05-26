import './App.css'
import { useState } from 'react'
import Question from "./components/question"

function App() {
  const [active, setActive] = useState(0);
  const questionNumbers = [1, 2, 3, 4, 5, 6, 7, 32]

  return (
    <>
      <div className='container'>
        {questionNumbers.map((questionNumber) => {
          return(
            <Question 
            key={questionNumber} 
            active={active} 
            setActive={setActive} 
            questionNumber={questionNumber}></Question>
          )
        })}

      </div>
    </>
  )
}

export default App
