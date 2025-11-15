import React from 'react';

function ChangeColor() {

    const [color, setColor] = React.useState('red');

    const changeColour = () =>{
        if (color === 'red'){
            setColor('green');
        }
        else{
            setColor('red');
        }
    }
    return (
        <div>
            <button className="button" onClick={changeColour}>click</button>
            <h1 className='changeColor' style={{color:color}}>Change Color</h1>
        </div>

    );
}

export default ChangeColor;