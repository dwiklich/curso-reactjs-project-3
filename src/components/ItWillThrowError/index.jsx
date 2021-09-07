import { useEffect, useState } from 'react';

const s = {
  styles: {
    fontSize: '60px',
  },
};

export const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Counter exception');
    }
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <button
        {...s}
        onClick={() => {
          setCounter((s) => s + 1);
        }}
        type="submit"
      >
        Click to increase {counter}
      </button>
    </div>
  );
};

export const ErrorBoundaries = () => {};
