import React from 'react';
import './ProgressDots.css';

export const ProgressDots = ({length, selectedIndex, onClick}) =>
{
    const dots = [];

    for (let i = 0; i < length; i++) {
        dots.push(
            <button
                key={i}
                className={`progress-dot${i === selectedIndex ? ' progress-dot--active' : ''}`}
                onClick={() => onClick(i)}/>
        );
    }

    return <div className='progressDotsContainer'>{dots}</div>;
};