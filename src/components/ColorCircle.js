import React from 'react';
import './ColorCircle.css';

const ColorCircle = ({ colors }) => {
    console.log(colors.color);
    return (
        <div className='tc'>
            {
                colors.map((color, i) => {
                    const bgcolor = { background: colors[i]};
                    return (
                        <div className='circle' style={bgcolor}>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ColorCircle;