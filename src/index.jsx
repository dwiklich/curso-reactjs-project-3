import React from 'react';
import ReactDOM from 'react-dom';
import { PostsPlaceholderProvider } from './contexts/PostsPlaceholderProvider';
import './index.css';
import App from './templates/App';

ReactDOM.render(
  <React.StrictMode>
    <PostsPlaceholderProvider>
      <App />
    </PostsPlaceholderProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals