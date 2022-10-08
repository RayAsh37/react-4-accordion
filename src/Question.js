import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          {/* {showInfo ? <p>min</p> : <p>more</p>} */}
        </button>
      </header>
      {/* <p>{showInfo ? info : ''}</p> */}
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
