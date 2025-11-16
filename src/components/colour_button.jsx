import React from 'react';

function ColourButton() {

    const [colour, setColour] = React.useState('red');

    const changeColor = (newColour) => {
        setColour(newColour);
    }

    return (
        <div className="colour-button">
            <h1 id="text" style={{ color:colour }} >WELCOME !!!!!!</h1>
            <button  onClick={()=>changeColor("red")} style={{ color:"red"}} >RED</button>
            <button  onClick={()=>changeColor("orange")} style={{ color:"orange"}} >ORANGE</button>
            <button  onClick={()=>changeColor("blue")} style={{ color:"blue"}}>BLUE</button>
            <button  onClick={()=>changeColor("yellow")} style={{ color:"yellow"}}>YELLOW</button>
        </div>
    );
}

export default ColourButton;