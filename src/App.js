import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import Autorization from "./components/Autorization"
class App extends React.Component {
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