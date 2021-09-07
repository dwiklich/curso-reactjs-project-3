import { useCallback, useEffect, useState /* ,useRef, useContext*/ } from 'react';

import { ButtonPage } from '../../components/ButtonPage';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { ItWillThrowError } from '../../components/ItWillThrowError';
import { PostPlaceholder } from '../../components/PostPlaceholder';
import { PostsRick } from '../../components/PostsApiRick';
import { PostsPlaceHolder } from '../../components/PostsPlaceholder';
import { ReactHooksParent } from '../../components/ReactHooksParent';
import { UseLayoutEffectComponent } from '../../components/UseLayoutEffectComponent';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostsPlaceholderProvider } from '../../contexts/PostsPlaceholderProvider';
import { Home } from '../Home';
import './styles.css';
// import { CardRickAndMortyContext } from '../../contexts/CardRickAndMortyProvider/context';
// import { loadCardApi } from '../../contexts/CardRickAndMortyProvider/actions';
// import { loadPosts } from '../../contexts/PostsPlaceholderProvider/actions';
// import { PostsContext } from '../../contexts/PostsPlaceholderProvider/context';
// import { data } from '../../contexts/PostsPlaceholderProvider/data';

// const useMediaQuery = (queryValue) => {};

function App() {
  const [valueButton, setValueButton] = useState('');

  useEffect(() => {}, [valueButton]);

  const handleClick = useCallback((value) => {
    setValueButton(value);
  }, []);

  return (
    <div className="App">
      <Home>
        <ReactHooksParent />
      </Home>
      <ButtonPage onClick={handleClick} />
      {valueButton === 'inputApiRick' && <PostsRick />}
      {valueButton === 'inputApiPlaceholderOnePost' && <PostPlaceholder />}
      {valueButton === 'inputApiPlaceholderAllPosts' && (
        <CounterProvider>
          <PostsPlaceholderProvider>
            <PostsPlaceHolder />
          </PostsPlaceholderProvider>
        </CounterProvider>
      )}

      {valueButton === 'useEffectButton' && <UseLayoutEffectComponent />}
      {valueButton === 'errorBoundaries' && (
        <>
          <ErrorBoundary>
            <ItWillThrowError />
          </ErrorBoundary>
          <ErrorBoundary>
            <ItWillThrowError />
          </ErrorBoundary>
          <ErrorBoundary>
            <ItWillThrowError />
          </ErrorBoundary>
          <ErrorBoundary>
            <ItWillThrowError />
          </ErrorBoundary>
          <ErrorBoundary>
            <ItWillThrowError />
          </ErrorBoundary>
        </>
      )}
    </div>
  );
}

export default App;
