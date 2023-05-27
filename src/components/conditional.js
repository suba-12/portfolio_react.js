import React, { Component } from 'react'

export class Conditional extends Component {
    
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }

    
  render() {
    return (
        <div>
    <h1>The Earth should have two face one is {this.state.show ?(<div>Day</div>) :(<div>Night</div>)} </h1>
      <button onClick ={() =>this.setState({show:this.state})}>
        Click{this.state.show}
      </button>

       </div>
     )
   }
 }
export default Conditional
