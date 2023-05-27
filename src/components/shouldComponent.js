import React, { Component } from 'react'

export class Should extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    shouldComponentUpdate()
    {
        console.warn("should update",this.state.count)
        if(this.state.count <10)
        {
            return true;
        }
    }
  render() {
    return (
      <div>
        <h1>Component shouldComponentUpdate is used.</h1>
        <h2>should component update{this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>
            Count{this.state.count}
        </button>
        </div>
    )
  }
}

export default Should