import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';

// MenuItems is a componenet that creates the links in the menu drawer
function MenuItems({ menuItems, toggleClick }) {
  const listMenuItems = menuItems.map((item) => {
    return (
      <h2 onClick={toggleClick} key={item.number}>
        {item.name}
      </h2>
    );
  });
  return listMenuItems;
}

export default function AppDrawer({ menuItems, toggleClick }) {
  const [isClicked, setIsClicked] = useState(false);

  let handleClick = (e) => {
    setIsClicked(!isClicked);
    e.stopPropagation();
  };

  return (
    <>
      <FaBars onClick={handleClick} className="ham-icon" />
      <div className="container">
        <div
          className="menu"
          style={{
            transform: isClicked ? 'translateX(0px)' : 'translateX(-283px)',
          }}>
          <h1>Menu</h1>
          <MenuItems menuItems={menuItems} toggleClick={handleClick} />
        </div>
        <div
          onClick={handleClick}
          className="shade"
          style={{
            opacity: isClicked ? '0.2' : '0',
            pointerEvents: isClicked ? 'all' : 'none',
          }}></div>
      </div>
    </>
  );
}
