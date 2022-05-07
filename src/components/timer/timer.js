import React from 'react';
import './timer.css'

function Timer(props) {
    return (
        <span className='timer'>
            {props.time}
        </span>
    )
}

export default Timer;