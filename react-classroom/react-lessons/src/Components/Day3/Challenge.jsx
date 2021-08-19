import {React, useState} from 'react';

const Challenge = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1+number2);

    const calculateTotal = () => {
        setTotal(number1 + number2);
    }

    return (
        <div>
            <h1>Adding Two Numbers</h1>
           <div>
            <label for="number1">Number 1: </label>
            <input type="number" name="number1" value={number1} onChange={(e) => setNumber1(+e.target.value)}/>
            
            <label for="number2">Number 2: </label>
            <input type="number" name="number2" value={number2} onChange={(e) => setNumber2(+e.target.value)}/>

            <button onClick={calculateTotal}>TOTAL</button>
            </div>
            
            <h2>{total}</h2>
        </div>
        


        
    )
}

export default Challenge
