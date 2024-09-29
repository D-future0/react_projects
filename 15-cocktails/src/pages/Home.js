import React from 'react'
import Searchform from "../components/Searchform"
import CocktailList from "../components/CocktailList"

const Home = () => {
  return (
    <div>
        <Searchform/>
        <CocktailList></CocktailList>
    </div>
  )
}

export default Home