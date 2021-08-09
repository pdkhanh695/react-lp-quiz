import React from 'react'
import {Button} from './Button';
import './GameOver.css'

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <div className="gameover__title">
                <h1>Analysis the result</h1>
            </div>
            <div className="gameover__points">Analysis complete!</div>
            <Button onClick={refreshPage}>I AGREE, show the presentation!</Button>
        </>
    )
}

export default GameOver
