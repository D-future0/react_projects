import React, { useContext, useEffect, useState } from "react"
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('d')
    const [cocktails, setCocktails] = useState([])
    const fetchDrinks = async()=>{
      try {
        setLoading(true)
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        const { drinks } = data 
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setLoading(false)
        setCocktails(newCocktails)
        
      } catch (error) {
        
      }
    }
    useEffect(()=>{
      fetchDrinks()
    }, [searchTerm])
  return (
    <AppContext.Provider value={{
        loading, searchTerm, cocktails, setSearchTerm
    }}>{children}</AppContext.Provider>
  )
}
const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppProvider, useGlobalContext}
