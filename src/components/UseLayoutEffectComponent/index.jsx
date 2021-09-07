import { useLayoutEffect, useRef, useState } from 'react';

export const UseLayoutEffectComponent = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4, 5, 'ola']);
  const input = useRef();
  const divRef = useRef();

  // const valueInput = (valueInput) => {
  //   if (typeof valueInput !== 'number') {
  //     Number(valueInput);
  //   }
  //   if (!isNaN(valueInput)) return null;
  // };

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 600);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleCLick = () => {
    setCounted((prevState) => [...prevState, input.current.value]);
    console.log(counted);
  }; //

  return (
    <>
      <label htmlFor="counter-insertion">
        Insira o numero:
        <input ref={input} type="text" name="counter-input" id="counter-insertion" />
        <button onClick={handleCLick}>Enviar</button>
      </label>
      <div
        ref={divRef}
        className="counter-list"
        style={{ height: '200px', width: '200px', overflowY: 'scroll', margin: '0 auto' }}
      >
        <ul className="counted">
          {counted.map((counter, index) => {
            return <li key={index}>{counter}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
