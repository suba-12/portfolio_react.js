import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props){
        super(props)

        this.state ={
            isLoggedIn: true
        }
    }
  render() {
    //short circuit operator

     return this.state.isLoggedIn && <div> User Greeting</div>

                //Ternary conditional operator
                
    return this.state.isLoggedIn ? (
        <div>User Greeting</div>
    ) :(
        <div>Welcome everyone</div>
    )
                       
    //Element variable

    //return <div> {message}</div>
    //if (this.state.isLoggedIn){
      //  return <div>User Greeting</div>
        
    //}else{
      //  return <div>Welcome everyone</div>
    //}

                              //if/else method

    //return(
    //<div>
     //<div>UserGreeting</div>
      //<div>Welcome everyone</div>
      //</div>
    //)
  }
}

export default UserGreeting