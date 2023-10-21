import Buttons from "./Buttons";
import OutputScreen from "./OutputScreen";
import { useState } from "react";

const Calculator=()=>{
        const [userInput, setUserInput] = useState("");
      
        const handleButtonClick = (value) => {
          if(value==="Clear"){
            setUserInput('');
          }
          else{
            setUserInput((prevInput) => prevInput + value);
          }
          if(value==="="){
            try {
                const result = eval(userInput); 
                setUserInput(result.toString()); 
              } catch (error) {
                setUserInput("Error"); 
              }
          }
        }
    return(
        <div >
            <div>
            <OutputScreen userInput={userInput}></OutputScreen>
            <Buttons handleButtonClick={handleButtonClick}></Buttons>
            </div>
        </div>
    )
}
export default Calculator;