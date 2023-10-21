import Buttons from "./Buttons";
const OutputScreen=({ userInput })=>{
    return(
        <div>
            <div className="output-screen">
                <input type="text" readOnly placeholder="0" value={userInput}></input>
            </div>
        </div>
    )
}
export default OutputScreen;