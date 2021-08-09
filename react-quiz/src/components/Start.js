import React from 'react'
import { Button } from './Button';
import './Start.css'

const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <div className="start__intro">
            <h1>ORAL HEALTH QUIZ</h1>
            <h4>Whenever, you want.</h4>
            <Button onClick={startQuiz} >Begin</Button>
        </div>
    )
}

export default Start
