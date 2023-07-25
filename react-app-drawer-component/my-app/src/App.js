import logo from './logo.svg';
import './App.css';
import AppDrawer from './AppDrawer';

const menuItems = [
  { id: 0, name: 'About' },
  { id: 1, name: 'Get Started' },
  { id: 2, name: 'Sign In' },
];

function App() {
  return <AppDrawer menuItems={menuItems} />;
}

export default App;
