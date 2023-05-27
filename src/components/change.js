import React, { Component } from 'react'

function Message(props){
  if (props.value)
  {
  return<h1>  The Earth have Two faces Day</h1>
  }
  return<h1> The Earth have Two faces Night</h1>

}


export class Change extends Component {
  constructor(props){
    super(props);
    this.state={value:false}
}

handleClick =() =>{
    this.setState({
        value :!this.state.value
    });
}
render() {
return (
  <div>
    
    <Message value={this.state.value}/>
    <button onClick = {this.handleClick}> Change </button>
  </div>
   )
 }
}
 

export default Change
