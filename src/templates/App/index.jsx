import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ButtonPage } from '../../components/ButtonPage';
import { PostsRick } from '../../components/PostsApiRick';
import { PostsPlaceHolder } from '../../components/PostsPlaceholder';
import { loadCardApi } from '../../contexts/CardRickAndMortyProvider/actions';
import { CardRickAndMortyContext } from '../../contexts/CardRickAndMortyProvider/context';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostsPlaceholderProvider } from '../../contexts/PostsPlaceholderProvider';

import { loadPosts } from '../../contexts/PostsPlaceholderProvider/actions';
import { PostsContext } from '../../contexts/PostsPlaceholderProvider/context';
import { data } from '../../contexts/PostsPlaceholderProvider/data';
import { Home } from '../Home';
import './styles.css';

function App() {
  const [valueButton, setValueButton] = useState('');

  useEffect(() => {}, [valueButton]);

  const handleClick = useCallback((value) => {
    setValueButton(value);
  }, []);

  return (
    <div className="App">
      <ButtonPage onClick={handleClick} />
      {valueButton === 'API RICK AND MORTY' && <PostsRick />}
      {valueButton === 'API PLACEHOLDER: PAGE POR POST' && <Home />}
      {valueButton === 'API PLACEHOLDER: ALL POSTS' && (
        <CounterProvider>
          <PostsPlaceholderProvider>
            <PostsPlaceHolder />
          </PostsPlaceholderProvider>
        </CounterProvider>
      )}
    </div>
  );
}

export default App;
