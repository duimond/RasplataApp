import React from "react";
import Logo from '../icons/logo.png'
class Autorization extends React.Component {
  render(){
    return(
      <div className="autorization"> 
      <img src={Logo} className="logo"/>
      <aside>
      <form>
        <input placeholder="ник сюды" />
        <input placeholder="пароль вот сюды" />
        <button>Войти</button>
      </form>
      </aside>
      </div> 
    )
  }
}
export default Autorization