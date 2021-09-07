import P from 'prop-types';

export const Home = ({ children }) => {
  return (
    <div className={'home'}>
      <h1> Home </h1>
      {children}
    </div>
  );
};

Home.propTypes = {
  children: P.element.isRequired,
};
