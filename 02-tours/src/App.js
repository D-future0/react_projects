import React, { useState,useEffect } from "react";
import Tours from "./tours";
import Loading from "./loading";
import Tour from "./tour";
const url = 'https://www.course-api.com/react-tours-project'

function App() {
  const [loading, SetLoading] = useState(true)
  const [tours, SetTours] = useState([])
  const fetchTours = async()=>{
    SetLoading(true)
    const resp = await fetch(url)
    const data = await resp.json()
    SetLoading(false)
    SetTours(data)
  }
  useEffect(()=>{
    fetchTours()
  }, [])
  const removeTour = (id)=>{
const newTours = tours.filter(tours => tours.id!==id)
    SetTours(newTours)
  }

  if(loading){
    return (
      <main>
        <section className='container'>
          <Loading />
        </section>
      </main>
    )
  }
  if(tours.length === 0){
    return<>
<main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    </>
  }
  return (
    <main>
      <section className='container'>
        <Tours tours={tours} removeTour={removeTour}/>
      </section>
    </main>
  )
}

export default App;
