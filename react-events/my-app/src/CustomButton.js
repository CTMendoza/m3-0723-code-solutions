export default function CustomButton({ text, color }) {
  function handleClick() {
    alert(`Clicked on ${text} button!`);
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: color, width: 100, height: 50 }}>
      {text}
    </button>
  );
}
