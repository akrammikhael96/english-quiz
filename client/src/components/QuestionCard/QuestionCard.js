import React from 'react';

import './QuestionCard.css';

const QuestionCard = props => {
    // const [deleteText, setDeleteText] = useState('');



    return (
        <div className='cardContainer'>
            <h5 className='qNo'>Question 1/10</h5>
            <h3 className='word'>word</h3>
            <div className='btnGroup'>
                <button className='btn'>Adjective</button>
                <button className='btn'>Adverb</button>
                <button className='btn'>Noun</button>
                <button className='btn'>Verb</button>
            </div>

        </div>

    );
};

export default QuestionCard;
