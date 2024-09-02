import { useEffect } from "react"
import React from 'react'

const Alert = ({msg,type,removeAlert, list}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert()
    }, 2000)
return ()=> {clearTimeout(timeout)}
  }, [list, removeAlert]);
  return (
    <p className={`alert alert-${type}`}>{msg} help</p>
  )
}

export default Alert