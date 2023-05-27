import React, { Component } from 'react'

export class Update extends Component {

    constructor()
    {
        super();
        this.state={
            counter : 0
        }
    }
  render() {
    return (
      <div>
        <h1>shouldComponentUpdate is used . </h1>
      <h2> Hello everyone</h2 >
      <button onClick ={() =>this.setState({counter:this.state.counter+1})}>
        Update counter{this.state.counter}</button> 
      </div>
    )
  }
}

export default Update