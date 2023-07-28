import { useState } from 'react';
import './Accordion.css';

function Topic({ topic, onShow, isActive }) {
  return (
    <>
      <h2 onClick={onShow} key={topic.id} className="title">
        {topic.title}
      </h2>
      {isActive && (
        <p className="summery" key={topic.id}>
          {topic.summary}
        </p>
      )}
    </>
  );
}

export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(id) {
    if (id === activeIndex) {
      return setActiveIndex(null);
    }
    setActiveIndex(id);
  }

  return (
    <section className="container">
      {topics.map((topic) => (
        <Topic
          isActive={activeIndex === topic.id}
          onShow={() => handleClick(topic.id)}
          topic={topic}
        />
      ))}
    </section>
  );
}
