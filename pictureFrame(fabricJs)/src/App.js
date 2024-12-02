import React, { useEffect, useRef, useState } from "react";
import { Canvas, Circle, Rect, Triangle,} from "fabric";
import * as fabric from "fabric"
import { FaRegCircle } from "react-icons/fa";
import { PiRectangle } from "react-icons/pi";
import { IoTriangleOutline } from "react-icons/io5";


function App() {
const canvasRef = useRef(null)
const [canvas, SetCanvas] = useState(null)

// const fabricCanvas = useRef(null)

useEffect(()=>{
  if(canvasRef.current){
     const initCanvas = new Canvas(canvasRef.current, {
      width: 500,
      height:400
     })
     initCanvas.backgroundColor = "#fff"
     initCanvas.renderAll()
     SetCanvas(initCanvas)
     return()=>{
      initCanvas.dispose()
     }
  }
}, [])

const handleImageUpload  = (e)=>{
  const file = e.target.files[0]
  if(file){
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload= (e)=>{
// fabric.Image.fromURL(e.target.result,(img)=>{
// canvasRef.current.setBackgroundImage(img, canvasRef.current.renderAll.bind(canvasRef.current),{
// scaleX:canvasRef.current.width / img.width,
// scaleY:canvasRef.current.height / img.height,
// })
//   })
let imageUrl = document.createElement('img')
imageElement.src = imageUrl
imageElement.onload = ()=>{
  let image = new fabric.Image(imageElement)
  canvas
}
}
  }
}
// download work
const handleSave = ()=>{
const dataUrl = canvasRef.current.toDataURL({
  format:"png",
  quality:1
})
const link = document.createElement(`a`)
link.href = dataUrl
link.download = "canvas-design.png"
link.click()
}
//add shape
const addShape = (e)=>{
  const shape = e.target.id
  if(canvas){
    if(shape === `circle`){
      const circle = new Circle({
        top: 100,
        left:50,
        width:100,
        height:60,
        fill:"D84D42"
      })
      canvas.add(circle)
    }
    if(shape === `rect`){
      const rect = new Rect({
        top: 100,
        left:50,
        width:100,
        height:60,
        fill:"D84D42"
      })
      canvas.add(rect)
    }
    if(shape === `triangle`){
      const triangle = new Triangle({
        top: 100,
        left:50,
        width:100,
        height:60,
        fill:"D84D42"
      })
      canvas.add(triangle)
    }
    else{
      canvas.add()
    }
  }
}

  return (
    <div style={{display:"flex",flexDirection:"column" , textAlign:"center", justifyContent:'center', marginTop:"5rem"}}>
    <h1>Upload image</h1>
    <input type="file" onChange={handleImageUpload} accept="image/*"></input>
    <button onClick={handleSave}>save work</button>
    <div style={{width:"100wv", marginTop:'1rem'}}>
    <canvas ref={canvasRef} id="canvas" style={{border:"2px solid black", margin:'1rem', maxWidth:"500px", height:"400px"}}></canvas>
    </div>
    <div style={{ marginTop:'3rem'}}>
      <button style={{ margin:"1rem", border:"none", background:"none"}}>
      <FaRegCircle style={{fontSize:"1.5rem"}} onClick={addShape} id="circle"/>
      </button>
      <button style={{ margin:"1rem", border:"none", background:"none"}}>
      <PiRectangle style={{fontSize:"1.5rem"}} onClick={addShape} id="rect"/>
      </button>
      <button style={{ margin:"1rem", border:"none", background:"none"}}>
      <IoTriangleOutline style={{fontSize:"1.5rem"}} onClick={addShape} id="triangle"/>
      </button>
      
    </div>
    </div>
  );
}

export default App;
