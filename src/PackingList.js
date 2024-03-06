import React from 'react';
import { Item } from './Item';

export function PackingList({ items, onDeleteItem, onToggleItems, onclearlist }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onToggleItems={onToggleItems} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
      <div className='action'>
        <button onClick={onclearlist}>clear list</button></div>
    </div>
  );
}
