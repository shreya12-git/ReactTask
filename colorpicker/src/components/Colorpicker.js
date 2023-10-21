import { useState } from "react";


const ColorPicker = (props) => {
  let colors=props.colors;
  const[selectedColor,setSelectedColor]=useState('')
  const[showColors,setShowColors]=useState(false);

const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
 };

 const handleButtonClick = () => {
    setShowColors(!showColors);
 };

 return (
    <div>
      <div className="box">
      <button className="pickbutton" onClick={handleButtonClick} >
        {selectedColor ? `Selected color: ${selectedColor}` : 'Pick a color'}
      </button>
      {showColors && (
        <div>
          {colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color, width: '30px', height: '30px', display: 'inline-block', cursor: 'pointer' }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      )}
    </div>
    </div>
 );
};

export default ColorPicker;
