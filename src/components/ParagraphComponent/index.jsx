import { useContext } from 'react';
import P from 'prop-types';

import { ParentContext } from '../ParentComponent';

export const ParagraphComponent = ({ children }) => {
  const context = useContext(ParentContext);
  const { s } = context;
  return <p {...s}>{children}</p>;
};
ParagraphComponent.propTypes = {
  children: P.string,
};
