// import { Children, cloneElement, createContext, useState } from 'react';
import { createContext, useState } from 'react';
import P from 'prop-types';

const s = {
  style: {
    fontSize: '60px',
  },
};

export const ParentContext = createContext();

export const ParentComponentTurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => setIsOn((prevState) => !prevState);

  return (
    <ParentContext.Provider value={{ s, isOn, onTurn }} className="parent-component">
      {children}
      {/* {Children.map(children, (child) => {
        console.log(child);
        if (typeof child.type === 'string') return child;
        const newChild = cloneElement(child, {
          isOn,
          onTurn,
          ...s,
        });
        return newChild;
      })} */}
    </ParentContext.Provider>
  );
};

ParentComponentTurnOnOff.propTypes = {
  children: P.node.isRequired,
};
