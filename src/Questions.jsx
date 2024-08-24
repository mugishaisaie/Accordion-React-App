import React from 'react'
import SingleQuestion from './SingleQuestion'

function Questions({questions,activeId, toggleQuestion}) {
  return (
    <div className='container'>
      <h1>Questions</h1>

      {questions.map((question)=>{
        return <SingleQuestion key={question.id} {...question} activeId={activeId} toggleQuestion={toggleQuestion}/>
      })}
      

    </div>
  )
}

export default Questions
