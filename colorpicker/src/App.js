import './App.css';
import Colorpicker from './components/Colorpicker';
function App() {
  const colors=['red','lime','blue','yellow','violet','aqua','orange','purple',' pink','green','coral','aquamarine','brown','darkorange','grey','mustard'];
  return (
    <div className="App">
        <h1>Color Picker</h1>
        <Colorpicker colors={colors}></Colorpicker>
    </div>
  );
}

export default App;
