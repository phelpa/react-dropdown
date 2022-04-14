import React from 'react'
import logo from './logo.svg'
import './App.css'
import DropDown from './components/DropDown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>CONTENT CONTENT CONTENT</div>
        <div>CONTENT CONTENT CONTENT</div>
        <DropDown align="right" size={1.4} />
        <div>------------</div>
      </header>
    </div>
  )
}

export default App
