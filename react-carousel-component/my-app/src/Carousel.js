import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa';
import './Carousel.css';

export default function Carousel({ src }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  });

  function handlePrev() {
    setActiveIndex((activeIndex - 1 + src.length) % src.length);
  }

  function handleNext() {
    setActiveIndex((activeIndex + 1) % src.length);
  }

  return (
    <>
      <div className="container">
        <div className="arrow-left">
          <FaArrowLeft
            onClick={() => {
              handlePrev();
            }}
          />
        </div>

        <div className="img-container">
          <img alt="" src={src[activeIndex].img}></img>
        </div>
        <div className="arrow-right">
          <FaArrowRight
            onClick={() => {
              handleNext();
            }}
          />
        </div>
      </div>
      <div className="container">
        <CircleIcons
          activeIndex={activeIndex}
          count={src.length}
          onSelect={(i) => setActiveIndex(i)}
        />
      </div>
    </>
  );
}

function CircleIcons({ src, color, onSelect, count, activeIndex }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <FaCircle
        className="fa-circle"
        onClick={() => onSelect(i)}
        color={i === activeIndex ? 'green' : 'white'}
      />
    );
  }
  return <> {buttons} </>;
}
