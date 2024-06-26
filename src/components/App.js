
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
        <lable> Enter your name:</lable><br></br>
        <input value = {name} onChange={(e)=>{
          setName(e.target.value)
        }} >
        </input>
        {name!=""?<p>Hello {name}! </p>: ""}
    </div>
  )
}

export default App
