import React, { Component } from 'react'

export class Will extends Component {
    constructor()
    {
        super();
        this.state={
            show:false
        }
    }
  render() {
    return (
      <div>
        <h1> componentWillUnmount is used. </h1>
       <h2> The first component </h2>
      {this.state.show? <Child/> : null}
      <button onClick={()=>{this.setState({show:!this.state.show})}}>
        Click </button>
        </div>
    )
  }
}

class Child extends React.Component{

    componentWillUnmount()
        {
          console.warn("Component is hidden now")
        }
    

    render() {
        return (
          <div>
           <h3> ThE child component</h3> 
            </div>
        )
      }
    }

export default Will
