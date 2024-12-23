import React, { useContext, useEffect, useState, useCallback } from "react"
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('d')
    const [cocktails, setCocktails] = useState([])
    const fetchDrinks = useCallback(async()=>{
      try {
        setLoading(true)
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        const { drinks } = data 
        if(drinks){

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
          setCocktails(newCocktails)
        }
        else {
          setCocktails([]);
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }, [searchTerm])
    useEffect(()=>{
      fetchDrinks()
    }, [searchTerm, fetchDrinks])
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
