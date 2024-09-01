import React, { useState, useEffect } from "react";
import data from "./data";
import Slide from "./Slide";
import SliderBtn from "./SliderBtn";



function App() {
  const [index, setIndex] = useState(0)
  const people = data
  useEffect(()=>{
    const lastIndex = people.length - 1
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  }, [index, people])
  useEffect(()=>{
   let slider =  setInterval(()=>{
      setIndex(index + 1)
    }, 5000)
    return ()=>{clearInterval(slider)}
  }, [index])
  return (
    <section className="section">
      <div className="title">
        <h2> <span>/</span> Review slider</h2>
      </div>
      <div className="section-center">
      {people.map((person, personIndex) => {
        return (
          <Slide key={person.id} index={index} personIndex={personIndex} people={people} person={person}/>
        )
      })}
        <SliderBtn index={index} setIndex={setIndex}/>
      </div>
    </section>
  );
}

export default App;
