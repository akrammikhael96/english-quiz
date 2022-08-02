import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


import './QuestionCard.css';

const QuestionCard = ({ QuestionEnd, GameScore }) => {
    const [data, setData] = React.useState(null);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(1);
    const [isWrong, setIsWrong] = React.useState(false);


    React.useEffect(() => {
        fetch("/words")
            .then((res) => res.json())
            .then((data) => setData(data.words));
    }, []);




    const answerButtonClick = (answer) => {
        if (data[currentQuestion].pos === answer) {

            const newScore = score + 1
            setScore(newScore);

            console.log("score: ", score, "/10", "right answer", data[currentQuestion].pos);
            switchQuestion();
        } else {
            setIsWrong(true);
            setTimeout(() => {
                setIsWrong(false)
                switchQuestion();
            }, 500)

        }




    };

    const switchQuestion = () => {

        if (currentQuestion < 9) {
            const nextQuestion = currentQuestion + 1;
            setCurrentQuestion(nextQuestion);

        } else {
            QuestionEnd(true)
            GameScore(score)



        }

    }






    return (

        <div className='cardContainer'>

            <ProgressBar animated now={(currentQuestion + 1) * 10} />
            <h6 className='qNo'>Question {currentQuestion + 1}/10</h6>

            <h3 style={{ color: isWrong ? 'red' : '' }} className='word'>{!data ? "Loading..." : data[currentQuestion]["word"]}</h3>

            <div className='btnGroup'>
                <button onClick={() => answerButtonClick("adjective")} className='btn'>Adjective</button>
                <button onClick={() => answerButtonClick("adverb")} className='btn'>Adverb</button>
                <button onClick={() => answerButtonClick("noun")} className='btn'>Noun</button>
                <button onClick={() => answerButtonClick("verb")} className='btn'>Verb</button>
            </div>


        </div>


    );
};

export default QuestionCard;
