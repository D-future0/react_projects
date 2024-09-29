import React, { useContext, useState } from 'react'

const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const {loading, setLoading} = useState(true)
    const {searchTerm, setSearchTerm} = useState('d')
    const {cocktails, setCocktails} = useState([])
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
