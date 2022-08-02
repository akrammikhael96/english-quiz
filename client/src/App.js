
import './App.css';
import QuestionCard from './components/QuestionCard/QuestionCard.js';
import React from 'react';
import RankCard from './components/RankCard/RankCard.js';



function App() {

  const [QuestionsEnd, setQuestionsEnd] = React.useState(false);
  const [finalScore, setFinalScore] = React.useState(0);

  const QuestionEnd = bool => {
    // 👇️ take parameter passed from Child component
    setQuestionsEnd(bool);
  };

  const GameScore = num => {
    setFinalScore(num);
  }

  return (
    <div className="App">


      {QuestionsEnd ? <RankCard score={finalScore}></RankCard> : <QuestionCard QuestionEnd={QuestionEnd} GameScore={GameScore}></QuestionCard>}



    </div>
  );
}

export default App;
