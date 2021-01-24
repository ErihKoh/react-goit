import { useState } from 'react';

export default function Button() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('0 clicks');

  const dbClick = () => {
    setCount(count + 1);
    const inter = setTimeout(() => {
      setCount(1);
    }, 300);
    if (count === 2) {
      setText('2 clicks');

      clearInterval(inter);
    }
  };

  return (
    <button type="button" onClick={dbClick}>
      {text}
    </button>
  );
}
