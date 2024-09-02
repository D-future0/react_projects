import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";

const getFromLS = ()=>{
  let getItems = localStorage.getItem(`list`)? JSON.parse(localStorage.getItem('list')) : [];
  return getItems
}

function App() {
  const [name, setName] = useState(``)
  const [list, setList] = useState(getFromLS())
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(false)
  const [alert, setAlert] = useState({show: false, msg:'', type:``})
  const submitHandler = (event)=>{
    event.preventDefault()
    if(!name){
      // setAlert({show : true, msg:'please input a value', type: 'danger'})
      showAlert(true, `please input a value`, 'danger')
    }
    else if(name && edit){
      setList(
        list.map((item)=>{
          if(item.id === editId){
            return {...item, title: name}
          }
          return item
        })
      )
      setName('')
      setEditId(null)
      setEdit(false)
      showAlert(true, `item edited`, 'success')
    }
    else{
      const item = {id: new Date().getTime().toString(), title:name}
      setList([...list, item])
      setName(``)
      showAlert(true, `item added to the list`, 'success');
    }
  }
  const showAlert = (show=false,msg='', type='')=>{
    setAlert({ show, type, msg });
  }
  const clearList = ()=>{
    showAlert(true, `empty list`, 'danger');
    setList([])
  }
  const removeItem = (id)=>{
    setList(list.filter((item)=> item.id !== id))
 
    showAlert(true, `item deleted`, 'danger');
  }
  const editItem = (id)=>{
    const selectedItem = list.find((item)=> item.id === id)
    setEdit(true)
    setEditId(id)
    setName(selectedItem.title)
  }
  useEffect(()=>{
    localStorage.setItem(`list`, JSON.stringify(list))
  }, [list])
  return (
    <>
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
        <input type='text' value={name} className="grocery" onChange={(event)=>{setName(event.target.value)}}/>
        <button className="btn">{edit? 'edit' : 'add'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-center">
        <List list={list} removeItem={removeItem} editItem={editItem}/>
      <button className="clear-btn" onClick={()=>clearList()}>clear</button>
      </div>
      )}
    </section>
    </>
  );
}

export default App;
