import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Hello " color="red" />
      <ToggleButton text="Hello " color="blue" />
      <ToggleButton text="Hello " color="orange" />
    </div>
  );
}

export default App;
