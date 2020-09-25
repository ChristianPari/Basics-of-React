import React from 'react'
import NavBarClass from './Components/NavBarClass'
import NavBarFunctional from './Components/NavBarFunctional'

function App() {
  return (
    <div className="App">
      <NavBarClass />
      <NavBarFunctional />
      <div className='body'>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default App;
