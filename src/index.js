import React from "react";
import * as ReactDOMClient from "react-dom/client";

const inputClick = () => console.log("Нажатие")
const mouseOver = () => console.log("мышка")
const helpful = "Привет расплатовец"
const elements = (<div className = "name">
  <h1>{helpful}</h1>
  <input placeholder={helpful} onClick={inputClick} onMouseOver={mouseOver}/>
</div>)
const licat = ReactDOMClient.createRoot(document.getElementById("app"))
licat.render(elements)