import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    console.log(text);
    alert(`Clicked on ${text} button!`);
  }
  return (
    <div className="App">
      <CustomButton
        onCustomClick={handleCustomClick}
        text="Cold"
        color="blue"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="Warm"
        color="orange"
      />
      <CustomButton onCustomClick={handleCustomClick} text="Hot" color="red" />
    </div>
  );
}

export default App;
