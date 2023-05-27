import React, { Component } from 'react'
class Mount extends Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor : "red"}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor : "yellow"})
        },100)
    }
  render() {
    return (
      <div > 
        <h1> componentDidMount is used .</h1>
        <h2> My fourite color is {this.state.favoritecolor}</h2>
        </div>
    );
  }
}


export default Mount
