import { React, useState } from "react";

const Example = () => {

    const [number1, setNumber1] = useState(10);
    let number2 = 5;

    const usingState = () => {
        setNumber1(number1 - 1);
        console.log(number1);
    }

    const usingVariable = () => {
        let decrease = number2 -1;
        document.getElementById("number2").textContent = decrease;
        console.log(decrease);
    }

    return(
        <div>
            <button onClick={usingState}>number1</button>
            <p>{number1}</p>
            <button onClick={usingVariable}>number2</button>
            <p id="number2"></p>
        </div>
    )
}


export default Example;