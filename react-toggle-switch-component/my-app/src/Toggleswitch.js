import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [isSwitched, setIsSwitched] = useState(false);
  function handleSwitch() {
    setIsSwitched(!isSwitched);
  }

  return (
    <>
      <div
        className="switch-container"
        style={{
          backgroundColor: isSwitched ? '#9ef01a' : '#dee2e6',
        }}>
        <div
          className="switch"
          onClick={handleSwitch}
          style={{
            left: isSwitched && '42px',
          }}></div>
      </div>
      <h2>{isSwitched ? 'ON' : 'OFF'}</h2>
    </>
  );
}
