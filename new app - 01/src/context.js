import React, { useContext, useState } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const {loading, setLoading} = useState(true)
    const {searchTerm, setSearchTerm} = useState('d')
    const {cocktails, setCocktails} = useState([])

    const fetchCocktails = async()=>{
      try {
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        const { drink } = data
      } catch (error) {
        
      }
    }
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
