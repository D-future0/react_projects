import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
    const {cocktails, loading} = useGlobalContext
    if(loading){
        return <Loading/>
    }
    if(cocktails.length < 1){
        return <></>
    }
  return (
    <div>CocktailList</div>
  )
}

export default CocktailList