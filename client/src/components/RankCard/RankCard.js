import React from 'react';

import './RankCard.css';

import congratulations from '../../congratulations.jpeg';

const RankCard = props => {
    const [finalRank, setFinalRank] = React.useState(0);

    React.useEffect(() => {

        fetch('/rank', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "score": (props.score - 1) * 10
            })

        })
            .then((res) => res.json())
            .then((data) => setFinalRank(data.rank));
    }, []);

    console.log(props.score)

    const reloadPage = () => {
        window.location.reload()
    }




    return (
        <div className='cardContainer'>
            <img className='img' src={congratulations} />
            <h5 className='rankTitle'>You are ranked in the top</h5>
            <h1 className='rank'>{finalRank}%</h1>
            <div className='btnGroup'>
                <button onClick={() => reloadPage()} className='btn'>Reset Game</button>


            </div>

        </div >

    );
};

export default RankCard;
