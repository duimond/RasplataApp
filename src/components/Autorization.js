import React from "react";
import Logo from '../icons/logo.png'
class Autorization extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        nick: "",
        password: ""
    }
  }
  render(){
    return(
      <div className="autorization"> 
      <img src={Logo} className="logo"/>
      <aside>
      <form>
        <input placeholder="ник сюды"  onChange={(e) => this.setState({nick: e.target.nick})}/>
        <input placeholder="пароль вот сюды" onChange={(e) => this.setState({password: e.target.password})}/>
        <button>Войти</button>
      </form>
      </aside>
      </div> 
    )
  }
}
export default Autorization