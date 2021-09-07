import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CountedList } from '../CountedList';

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
  useEffect(() => {
    console.log(counted);
  }, [counted]);

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 600);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleCLick = () => {
    setCounted((prevState) => [...prevState, input.current.value]);
    console.log(divRef.current);
    divRef.current.handleClick();
  }; //

  return (
    <>
      <label htmlFor="counter-insertion">
        Insira o numero:
        <input ref={input} type="text" name="counter-input" id="counter-insertion" />
        <button onClick={handleCLick}>Enviar</button>
      </label>
      <CountedList ref={divRef} counted={counted} />
    </>
  );
};
