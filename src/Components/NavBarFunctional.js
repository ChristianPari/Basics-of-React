import React, { useState } from 'react'

export default function NavBarFunctional() {
  const [counter, setCounter] = useState(0)

  const counterUp = () => {
    setCounter(counter + 1)
  }

  const counterDown = () => {
    setCounter(counter - 1)
  }
  const counterReset = () => {
    setCounter(0)
  }

  return(
    <div className='navBarFunctional'>
      <h2>Functional</h2>
      <h3>{`The Count is ${counter}`}</h3>
      <button
        onClick={counterUp}
      >
        +1
      </button>
      <button
        onClick={counterDown}
      >
        -1
      </button>
      <button
        onClick={counterReset}
      >
        Reset
      </button>
    </div>
  )
}