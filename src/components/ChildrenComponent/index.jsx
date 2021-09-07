// import P from 'prop-types';
import { useContext } from 'react';
import { ParentContext } from '../ParentComponent';

export const ChildrenComponentTurnedOn = ({ children }) => {
  const context = useContext(ParentContext);
  const { isOn } = context;

  return isOn ? children : null;
};

export const ChildrenComponentTurnedOff = ({ children }) => {
  const context = useContext(ParentContext);
  const { isOn } = context;

  return isOn ? null : children;
};

export const ChildrenComponentButton = () => {
  const context = useContext(ParentContext);
  const { isOn, onTurn, s } = context;
  // useEffect(() => {}, [context]);
  console.log(isOn, onTurn, s);

  return (
    <button onClick={onTurn} {...s}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

// ChildrenComponentTurnedOn.propTypes = {
//   children: P.node.isRequired,
//   isOn: P.bool,
// };

// ChildrenComponentTurnedOff.propTypes = {
//   children: P.node.isRequired,
//   isOn: P.bool,
// };

// ChildrenComponentButton.propTypes = {
//   isOn: P.bool,
//   onTurn: P.func,
// };
