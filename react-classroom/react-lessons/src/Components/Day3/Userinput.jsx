import { React, useState} from "react";
const Userinput = () => {
    const [userInput, setUserInput] = useState("");
    const [name, setName] = useState("Mitch");

    const handleInput = (event) => {
        setUserInput(event.target.value);
        console.log(userInput);
    }
    const updateName = (e) => {
        e.preventDefault();
        setName(userInput);
        setUserInput("");
    }
    return(
        <div>
            <h1>Hello {name}!</h1>
            <form>
                <label for="name">Update Name: </label>
                <input type="text" value={userInput} name="name" onChange={handleInput}/>
                <button onClick={updateName}>SAVE</button>            
            </form>
        </div>
    )
}


export default Userinput;
