import P from 'prop-types';
import { useMediaQuery } from '../../Hooks/useMediaQuery';

export const Home = ({ children }) => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width:320px)');

  // eslint-disable-next-line no-unused-vars

  const background = huge ? 'GrayText' : big ? 'green' : medium ? 'InfoBackground' : small ? 'white' : null;
  const fontSize = huge ? '36px' : big ? '26px' : medium ? '16px' : small ? '9px' : null;
  return (
    <div className={'home'} style={{ background, fontSize }}>
      <h1> Home </h1>
      <p>Largura da tela: {console.log(huge)}</p>
      <h2> Ordem de execução dos Hooks abaixo</h2>
      {children}
    </div>
  );
};

Home.propTypes = {
  children: P.element,
};
