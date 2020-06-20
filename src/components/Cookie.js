import React from 'react';
import { useCookies } from 'hooks';

const Cookie = () => {
  const [cookie, setCookie] = useCookies('name');

  if (!cookie) return null;
  return (
    <div>
      <h1>{cookie || ''}</h1>
      <input value={cookie} onChange={(e) => setCookie(e.target.value)} />
    </div>
  );
};

export default Cookie;
