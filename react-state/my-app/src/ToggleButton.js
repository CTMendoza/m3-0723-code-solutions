import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log(`The value returned by useState: `, isClicked);
  function handleClick() {
    console.log(`The value before calling the setter: `, isClicked);
    setIsClicked(!isClicked);
    console.log(`The value after calling the setter: `, isClicked);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isClicked ? color : 'white',
        width: 100,
        height: 50,
      }}>
      {text}
    </button>
  );
}
