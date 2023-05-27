import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        welcome {this.props.name} profession {this.props.dept}
        </div>
    )
  }
}

export default Welcome