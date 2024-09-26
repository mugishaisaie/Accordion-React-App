
import React from "react"
import { useState } from "react"
import questions from "./data"
import Questions from "./Questions"

function App() {
  const [question, setQuestion] = useState(0)
  const[activeId, setActiveId] = useState(null)

  const toggleQuestion =(id)=>{
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId)

  }

  return (
    <div>
     <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion}/>
    </div>
  )
    
}

export default App
