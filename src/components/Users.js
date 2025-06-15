import React from "react";

class Users extends React.Component {
    users = [
        {
            id:1,
            Name: "Duimond"
        },
        {
            id:2,
            Name: "R_Ksar"
        }
    ]
  render(){
    return(
      <div>
        {this.users.map((user) => (<div key = {user.id}>
            
            <h3>{user.Name} </h3>
        </div>))}
      </div>)
  }
}
export default Users