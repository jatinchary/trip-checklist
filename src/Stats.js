import React from 'react';

export function Stats({ items }) {
  const numITEMS = items.length;
  const numPack = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPack / numITEMS) * 100);
  return (
    <footer className='stats'>
      <em>
        You have {numITEMS} items in your list, and you already packed
        X ({percentage}%)
      </em>
    </footer>
  );
}
