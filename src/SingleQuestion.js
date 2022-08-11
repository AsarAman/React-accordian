import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({title,info}) => {
    const [showInfo, setShowInfo] = useState(false)
  return (
    <div>
        <div className='border border-indigo-400 p-4 mb-4 mt-10'>
        <div className='flex items-center justify-between gap-4'>
        <p>{title}
        
        </p>
        <button onClick={()=> {setShowInfo(!showInfo)}}>{ showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
           
    
        </div>
        {showInfo && <p>{info}</p>}
        <div>
        
        
        </div>
        </div>
        
    </div>
  )
}

export default SingleQuestion