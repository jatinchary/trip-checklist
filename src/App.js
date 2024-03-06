import React, { useState } from 'react'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false  },
];

function App() {
  return (<div className='app'>
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </div>
    
  )
}

export default App

function Logo(){
  return<><h1>🌴trip checklist🌴</h1>
 
  </> ;
}

function Form(){
  const [Discription , setDiscription]= useState("");
  const [quantity , setquantity]=useState(1)

  function Handelsubmit(e){
    e.preventDefault();
    if(!Discription) return;
    const newItem = { Discription  , quantity ,packed:false , id: Date.now()};
    console.log(newItem);
  }
  return( <form className="add-form" onSubmit={Handelsubmit}>
    <h3>what all do you need for your trip???</h3>
    <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
   {Array.from({length:20},(_,i)=>i+1).map
   ((num)=>(<option value={num} key={num}>{num}</option>))}
    </select>
    <input type="text" placeholder='Items...' value={Discription} onChange={(e)=>setDiscription(e.target.value)}/>
    <button>Add</button>
  </form>
  );
}

function PackingList(){
  return <div className="list"> 
  <ul >{initialItems.map((item)=>(<Item item={item} key={item.id}/>))}</ul>
  </div>;
}

function Stats (){
  return(
  <footer>
    <em>you have X items in your list, and you alredy packed X (X%) </em>
    </footer>
    );
}
function Item({item}){
  return <li><span style={item.packed ? {textDecoration: "line-through"} : {}}> {item.description} {item.quantity} 
  
  </span>
  <button>❌</button></li>;
}

