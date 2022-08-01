import React from 'react';


import './QuestionCard.css';

const QuestionCard = props => {
    const [data, setData] = React.useState(null);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(1);
    const [isWrong, setIsWrong] = React.useState(false);

    React.useEffect(() => {
        fetch("/words")
            .then((res) => res.json())
            .then((data) => setData(data.words));
    }, []);

    console.log(data);

    const answerButtonClick = (answer) => {
        if (data[currentQuestion].pos === answer) {
            const newScore = score + 1
            setScore(newScore);
            switchQuestion();
        } else {
            setIsWrong(true);
            setTimeout(() => {
                setIsWrong(false)
                switchQuestion();
            }, 1000)

        }

        console.log(score);


    };

    const switchQuestion = () => {

        if (currentQuestion < 9) {
            const nextQuestion = currentQuestion + 1;
            setCurrentQuestion(nextQuestion);
        } else {

        }

    }






    return (
        <div className='cardContainer'>

            <h5 className='qNo'>Question {currentQuestion + 1}/10</h5>

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
