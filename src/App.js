import React, { useState } from 'react';
import { Logo } from './Logo';
import { Form } from './Form';
import { PackingList } from './PackingList';
import { Stats } from './Stats';

const initialItems = [
];

function App() {
  const [items, setItems] = useState(initialItems);
  

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function Handeldeleteitem(id) {
    console.log("Deleting item with ID:", id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id){
    setItems(items=>items.map(item=>item.id ===  id ? {...item, packed:!item.packed}:item));
  }
  
  function handelClearlist(){
    const conferm = window.confirm("do you want to clear the list?")
    if (conferm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={Handeldeleteitem} onToggleItems={handelToggleItem} onclearlist= {handelClearlist}/>

      <Stats items={items} />
    </div>
  );
}

export default App;


