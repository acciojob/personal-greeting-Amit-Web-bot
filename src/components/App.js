
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
        <p>Enter your name:</p>
        <input value = {name} onChange={(e)=>{
          setName(e.target.value)
        }} >
        </input>
        {name!=""?<p>Hello {name}!</p>: ""}
    </div>
  )
}

export default App
