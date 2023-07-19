import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleOnClick(text) {
    alert(`Clicked on ${text} button!`);
  }
  return (
    <div className="App">
      <CustomButton onClick={handleOnClick} text="Cold" color="blue" />
      <CustomButton onClick={handleOnClick} text="Warm" color="orange" />
      <CustomButton onClick={handleOnClick} text="Hot" color="red" />
    </div>
  );
}

export default App;
