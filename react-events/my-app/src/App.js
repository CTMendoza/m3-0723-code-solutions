import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton text="Cold" color="blue" />
      <CustomButton text="Warm" color="orange" />
      <CustomButton text="Hot" color="red" />
    </div>
  );
}

export default App;
