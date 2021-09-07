import P from 'prop-types';
import { useEffect, useState } from 'react';

import { useFetch } from '../../Hooks/use-fetch';

export const Post = ({ pageRender }) => {
  const [postId, setPostId] = useState(() => {
    null;
    console.log('Iniciou');
  });
  const [post, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    headers: {
      abc: '1' + postId,
    },
  });

  useEffect(() => {
    setPostId(pageRender);
  }, [pageRender]);

  if (loading) {
    console.log('aaa');
    return <p>DESENHANDO.</p>;
  }
  console.log('useEFFECT agora');

  const handleClick = (id) => {
    setPostId(id);
  };

  return (
    <div className="post-card">
      {post ? (
        <div key={`post-${post.id}`} onClick={() => handleClick(post.id)}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Page não encontrada</p>
      )}
    </div>
  );
};

Post.propTypes = {
  pageRender: P.number.isRequired,
};
