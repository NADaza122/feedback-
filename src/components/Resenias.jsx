import { useState } from 'react'

const Resenia = ({ resenia }) => {
    const [rating, setRating]=useState(resenia.rating)
    const [comments,
           setCommets]=useState(resenia.text)

    //cambiar el estado
    const agregarNota=()=>{
        setRating((prev)=>{
            return prev +1
        })
    }

    //restar la nota
    const restarNota=()=>{
        setRating((prev)=>{
            return prev -1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
               {rating}
            </div>
            <div className="text-display">
                {comments}
            </div>
            <button className='btn' onClick={agregarNota}>
                Sumar nota
            </button>
            <button className='btn' onClick={restarNota}>
               Restar nota
            </button>
        </div>
    )
}

export default Resenia