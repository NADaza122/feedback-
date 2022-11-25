import { useState } from 'react'

const Resenia = ({ resenia }) => {
    const [rating, setRating]=useState(resenia.rating)
    const [comments,
           setCommets]=useState(resenia.text)

    //Sumar el estado de la Calificación
    const agregarNota=()=>{
        setRating((prev)=>{
            return prev +1
        })
    }

    //Restar el estado de la Calificación
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
                Sumar Calificación
            </button>
            <button className='btn' onClick={restarNota}>
               Restar Calificación
            </button>
        </div>
    )
}

export default Resenia