import React from 'react';
import './Landing.css';
import quizTimeImg from '../../quiz_time.png'

const Landing = () => {
    return (
        <div>
            <h1>
                What Would you Do?
            </h1>
            <img src={quizTimeImg} className='banner-image' />
        </div>
    );
};

export default Landing;