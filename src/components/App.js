import React from "react";
import Header from "./Header"
class App extends React.Component {
    helpful = "Шапка"
  render () {
    return (<div className = "name">
  <Header/>
  <h1>{this.helpful}</h1>
  <input placeholder={this.helpful} onClick={this.inputClick} onMouseOver={this.mouseOver}/>
</div>)
  }
  inputClick = () => console.log("Нажатие")
  mouseOver = () => console.log("мышка")
}
export default App