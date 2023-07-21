import { useState } from 'react';

export default function HotButton({ text }) {
  const [clickCount, setClickCount] = useState(0);
  function handleClick() {
    setClickCount(clickCount + 1);
  }

  function defineBackgroundColor() {
    if (clickCount <= 3) return '#3c096c';
    if (clickCount <= 6) return '#a663cc';
    if (clickCount <= 9) return '#f08080';
    if (clickCount <= 12) return '#f79d65';
    if (clickCount <= 15) return '#fcf300';
    if (clickCount <= 18) return 'white';
  }

  const definedBackgroundColor = defineBackgroundColor();

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: definedBackgroundColor,
          color: clickCount <= 9 ? 'white' : 'black',
          width: 100,
          height: 50,
        }}>
        {text}
      </button>
      <p>Click Counter: {clickCount}</p>
    </>
  );
}
