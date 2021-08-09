import React, { useState, useEffect } from 'react'
import GameOver from './GameOver'
import './Quiz.css'

const Quiz = () => {

    const [quiz, setQuiz] = useState([
        {question: 'Which symptom(s) have you experienced in the last month?',
        options: ["Bleeding gums", "Tooth pain", "Plaque build up", "bad breath", "More than 1 of symptoms above"]},
        {question: 'How often do you experience this symptom?', options: ["Only once last month", "Very rarely", "Frequently", "Always"]},
        {question: 'How many unsuccessful treatment options have you tried within the last 3 years?', options: ["Have not tried", "1", "More than 1 but less than 4", "4+"]},
        {question: 'How often do you brush your teeth?', options: ["Once daily", "Twice daily", "After every meal", "I don't brush my teeth every day"]},
        {question: 'Which age category describes you best?', options: ["Under 30", "31-39", "40-49", "50-59", "60+"]}

    ]);
    const [number, setNumber] = useState(0);
    const [pts, setPts] = useState(0);

    const pickAnswer = (e) => {

        let userAnswer = e.target.outerText;
        setNumber(number + 1);
    }

    // useEffect(() => {
    //     setQuiz({question: 'cau hoi', options: "ad", answer:"dasda" })
    // }, []);


    return (
        <div className="quiz__quizwindow">
            { quiz[number] &&

                <>
                    <div className="quiz__question" dangerouslySetInnerHTML={{ __html: quiz[number].question }}></div>

                    <div className="quiz__options">
                        {quiz[number].options.map((item, index) => (
                            <div className="quiz__option" key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={pickAnswer}></div>
                        ))}
                    </div>
                </>

            }
            {
                number === 5 && <GameOver pts={pts} />
            }
        </div>
    )
}

export default Quiz
