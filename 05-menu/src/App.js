import React, { useState } from "react";
import Menu from "./Menu";  
import Categories from "./Categories";
import items from './data'

const allCategory = [`all`, ...new Set(items.map(item =>item.category))]

function App() {
  const [menuItems, SetMenuItems] = useState(items)
  // const [allCategory, SetAllCategory] = useState([])

  const filterItems = (category)=>{
    if(category === `all`){
      return SetMenuItems(items)
    }
    const newItem = items.filter((items) =>items.category === category)
    SetMenuItems(newItem)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories allCategory={allCategory} filterItems={filterItems} />
        <div className='section-center'>
        {menuItems.map(item =>{
          return (<Menu key={item.id} {...item} />);
        })}
        </div>
        </section>
      </main>
  );
}

export default App;
