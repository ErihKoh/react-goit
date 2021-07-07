import React from 'react';


const Controls = ({ onIncriment, onDecrement }) => {
    return (
        <div>

        <button type="button" onClick={onIncriment}>
            Increment
            
        </button>
        
        <button type="button" onClick={onDecrement}>
            
            Decrement
            
        </button>

    </div>
    )
}
export default Controls;