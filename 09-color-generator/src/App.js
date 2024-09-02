import React, { useState } from "react";
import Values from 'values.js'
import SingleColor from "./SingleColor";

function App() {
  const [color, SetColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values(`#222`).all(10));

  const submitHandler = (event)=>{
    event.preventDefault();
    console.log(`clicked`);
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      setIsError(true)
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={color}
            onChange={(event) => {
              SetColor(event.target.value);
            }} className={isError ? 'error' : null} placeholder="#F2358"
          ></input>
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </section>
      <section className="color">
        {list.map((color, index)=>{
          return(
            <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          )
        })}
      </section>
    </>
  );
}

export default App;
