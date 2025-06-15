import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import Autorization from "./components/Autorization"
class App extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            id: 0,
            nick: "",
            rank: "",
            squad: 0,
            squadRank: "",
            data: new Date(),
            role: "",
            roleInSite: ""
        }
    }
    render () {
        return(
            <div>
            <Header title = "Расплата"/>
            
            <Autorization/>
            
            </div>
        )
    }
}
export default App