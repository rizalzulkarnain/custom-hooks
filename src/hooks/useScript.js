import { useState, useEffect } from 'react';

let cached = [];

export const useScript = (src) => {
  const [status, setStatus] = useState({
    loaded: false,
    error: false,
  });

  useEffect(() => {
    if (cached.includes(src)) {
      setStatus({
        loaded: true,
        error: false,
      });
    } else {
      cached.push(src);

      const script = document.createElement('script');
      script.src = src;
      script.async = true;

      const onLoad = () => {
        setStatus({
          loaded: true,
          error: false,
        });
      };

      const onError = () => {
        const i = cached.indexOf(src);
        if (i >= 0) {
          cached.splice(i, 1);
        }

        script.remove();

        setStatus({
          onLoad: true,
          onError: true,
        });
      };

      script.addEventListener('load', onLoad);
      script.addEventListener('onError', onError);
      document.body.appendChild(script);

      return () => {
        script.removeEventListener('load', onLoad);
        script.removeEventListener('onError', onError);
      };
    }
  }, [src]);

  return [status.loaded, status.error];
};
