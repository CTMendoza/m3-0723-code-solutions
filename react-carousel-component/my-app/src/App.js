import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';
const src = [
  {
    img: '/images/blackbeard.png',
  },
  {
    img: '/images/brook.png',
  },
  {
    img: '/images/kuzan.png',
  },
  {
    img: '/images/luffy.png',
  },
  {
    img: '/images/sanji.png',
  },
  {
    img: '/images/zoro.png',
  },
];
function App() {
  return (
    <div className="App">
      <Carousel src={src} />
    </div>
  );
}

export default App;
