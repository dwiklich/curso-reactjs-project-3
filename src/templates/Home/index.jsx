import P from 'prop-types';
import React, { useState } from 'react';
import { Suspense } from 'react';

import {
  ChildrenComponentTurnedOn,
  ChildrenComponentTurnedOff,
  ChildrenComponentButton,
} from '../../components/ChildrenComponent';
import { ParagraphComponent } from '../../components/ParagraphComponent';
import { ParentComponentTurnOnOff } from '../../components/ParentComponent';

// import { LazyComponent } from '../../components/LazyComponent';
import { useMediaQuery } from '../../Hooks/useMediaQuery';
import './styles.css';

const loadComponent = () => import('../../components/LazyComponent');

const LazyComponent = React.lazy(loadComponent);

export const Home = ({ children }) => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width:320px)');

  const [show, setShow] = useState(false);

  const background = huge ? 'GrayText' : big ? 'green' : medium ? 'InfoBackground' : small ? 'white' : null;
  const fontSize = huge ? '36px' : big ? '26px' : medium ? '16px' : small ? '9px' : null;
  return (
    <>
      <button
        // onMouseOver faz o pre load, deixando mais rapido, pois carrega antes de clicar
        onMouseOver={loadComponent}
        type="submit"
        onClick={() => {
          setShow((s) => !s);
        }}
      >
        Componente {show ? 'ativado' : 'desativado'}
      </button>
      <Suspense fallback={<p>Loading...</p>}>{show && <LazyComponent />}</Suspense>

      <div className={'home'} style={{ background, fontSize }}>
        <h1> Home </h1>
        <p>
          Largura do Layout:{' '}
          {huge
            ? '(min-width: 980px)'
            : big
            ? '(max-width: 979px) and (min-width: 768px)'
            : medium
            ? '(max-width: 767px) and (min-width: 321px)'
            : small
            ? '(max-width:320px)'
            : ''}
        </p>
        <p className="hook-ordem-execucao"></p>
        <h2> Ordem de execução dos Hooks abaixo</h2>
        {children}
        <p className="hook-ordem-execucao"></p>
        <ParentComponentTurnOnOff>
          <div>
            <p>1</p>
            <p>2</p>
            <ChildrenComponentTurnedOn>
              <ParagraphComponent>ta on</ParagraphComponent>
            </ChildrenComponentTurnedOn>
            <ChildrenComponentTurnedOff>
              <ParagraphComponent>ficou off</ParagraphComponent>
            </ChildrenComponentTurnedOff>
            <ChildrenComponentButton />
          </div>
        </ParentComponentTurnOnOff>
      </div>
    </>
  );
};

Home.propTypes = {
  children: P.element,
};
