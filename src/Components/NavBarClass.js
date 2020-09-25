// React needed for any JSX file
// Component class the parent class for any React Custom Component
import React, { Component } from 'react'

export default class NavBarClass extends Component {
  constructor(props) {
    super(props) // gives the properties and methods of Parent Comp to child Comp
    this.state = {
    counter: 0,
    ...props.state
    }
    this.counterUp = this.counterUp.bind(this)
    this.counterDown = this.counterDown.bind(this)
    this.counterReset = this.counterReset.bind(this)
  }

  counterUp() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  counterDown() {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }))
  }
  
  counterReset() {
    this.setState(() => ({
      counter: 0
    }))
  }

  render() {
    const curCount = this.state.counter

    return (
      <div className='navBarClass'>
        <h2>Class</h2>
        <h3>{`The Count is ${curCount}`}</h3>
        <button
          onClick={this.counterUp}
        >
          +1
        </button>
        <button
          onClick={this.counterDown}
        >
          -1
        </button>
        <button
          onClick={this.counterReset}
        >
          Reset
        </button>
      </div>
    )
  }
}