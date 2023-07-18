import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton text="I" color="red" />
      <CustomButton text="Know" color="blue" />
      <CustomButton text="React!" color="green" />
    </div>
  );
}

export default App;
