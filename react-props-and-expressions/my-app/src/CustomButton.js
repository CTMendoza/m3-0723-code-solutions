export default function CustomButton({ text, color }) {
  return (
    <button style={{ backgroundColor: color, width: 100, height: 50 }}>
      {text}
    </button>
  );
}
