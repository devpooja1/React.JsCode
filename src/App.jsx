<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
=======
import { useState, useEffect } from "react";

>>>>>>> afd9b38ce418a23189c767bc37f053b7c748c220



const App=()=>{
<<<<<<< HEAD
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>


      

      </Route>
    </Routes>
    
    </BrowserRouter>
=======
  const [val, setVal]=useState("Pooja");

  const myval=()=>{
    setVal("rajput");
  }



  const [color, setColor]=useState("red");

  const [cnt,setCnt]=useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setCnt(cnt+1)
    },1000);
  },[]);


 const [count, setCount]=useState(0);
 const [multi, setMulti]=useState(0); 
useEffect(()=>{

setMulti(count*2)

},[count]);

const [name, setName]=useState("");
const [city, setCity]=useState("");

  return(
    <>
    
    <h1>Welcome to Cybrom:{val}</h1>
    
    <button onClick={myval}>Click</button>
    <h1 style={{color:color}}>My Color is:{color}</h1>
    <button onClick={()=>{setColor("yellow")}}>yellow</button>
    <button onClick={()=>{setColor("blue")}}>blue</button>
    <button onClick={()=>{setColor("violet")}}>violet</button>
    <button onClick={()=>{setColor("pink")}}>pink</button>


    <h1>Counter Program:{cnt}</h1>
    <button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
    <button onClick={()=>{setCnt(cnt-1)}}>Decrement</button>

    <h1>useEffect</h1>
    <h1>My App: {count}</h1>
    <h1>Multiplication: {multi}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click here!!!</button>

    <h1>Forms</h1>
    Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
    Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/><br/>
    <button>Click here</button>

>>>>>>> afd9b38ce418a23189c767bc37f053b7c748c220
    </>
  )
}
export default App;