import React from 'react';
import './Question.css'

const Question = (props) => {
    return(
        <div className='question'>
        <h1>{props.name}</h1>
        <h1>{props.questions}</h1>
        </div>
    );
}

export default Question;