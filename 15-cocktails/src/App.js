import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About"
import Error from "./pages/Error"
import Home from "./pages/Home"
import SingleCocktail from "./pages/SingleCocktail"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Cocktail/:id" element={<SingleCocktail/>} />
      <Route path="*" element={<Error/>} />
      {/* <Route path="/">
      <Home/>
      </Route>
      <Route path="/Abpot">
      <About/>
      </Route>
      <Route path="/SingleCocktail">
      <SingleCocktail/>
      </Route> */}
    </Routes>
    </>
  );
}

export default App;
