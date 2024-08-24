import React, { useState } from 'react'
import{AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function SingleQuestion({id, title, info,activeId, toggleQuestion}) {
  const isActive = id === activeId;
  return (
    <div className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={()=>toggleQuestion(id)}>
          {isActive? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}

    </div>
  )
}

export default SingleQuestion