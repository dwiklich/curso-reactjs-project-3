import { useCallback, useEffect, useState } from 'react';

export const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });
  //
  const run = useCallback(async () => {
    console.log('EFFECT: ', new Date().toLocaleString());

    await new Promise((r) => setTimeout(r, 2000));
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    await new Promise((r) => setTimeout(r, 2000));

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((error) => {
        setState({
          result: null,
          error: error,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
    return () => {
      setState({
        result: null,
        error: null,
        status: 'idle',
      });
    };
  }, [shouldRun, run]);
  //123456
  return [run, state.result, state.error, state.status];
};
