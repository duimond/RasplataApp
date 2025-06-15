import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App"
import './css/main.css'






const licat = ReactDOMClient.createRoot(document.getElementById("app"))
licat.render(<App/>)