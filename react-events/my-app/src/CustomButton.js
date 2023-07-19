export default function CustomButton({ onCustomClick, text, color }) {
  return (
    <button
      onClick={onCustomClick}
      style={{ backgroundColor: color, width: 100, height: 50 }}>
      {text}
    </button>
  );
}
