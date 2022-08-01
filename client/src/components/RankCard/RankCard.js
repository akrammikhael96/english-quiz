import React from 'react';

import './RankCard.css';

const RankCard = props => {
    // const [deleteText, setDeleteText] = useState('');



    return (
        <div className='cardContainer'>
            <h5 className='rankTitle'>You are ranked in the top</h5>
            <h3 className='rank'>50%</h3>
            <div className='btnGroup'>
                <button className='btn'>Reset Game</button>
                <button className='btn'>Exit</button>

            </div>

        </div>

    );
};

export default RankCard;
