import React from 'react';

export default function Loading({ center }) {
  return <div className={center ? 'loading loading-center' : 'loading'}></div>;
}
