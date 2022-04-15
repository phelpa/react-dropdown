import React from 'react'
import logo from './logo.svg'
import './App.css'
import DropDown from './components/DropDown'
import DropDownItem from './components/DropDown/DropDownItem'
import { MoreIcon } from './components/MoreIcon'

function App() {
  const onClick = () => {
    alert('clicked')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>CONTENT CONTENT CONTENT</div>
        <div>CONTENT CONTENT CONTENT</div>

        <DropDown
          align="right"
          iconSize={1.4}
          menuSize={1.2}
          icon={<MoreIcon />}
        >
          <DropDownItem onClick={onClick}>Rename</DropDownItem>
          <DropDownItem onClick={onClick}>Delete</DropDownItem>
          <DropDownItem externalLink="https:\\www.google.com">
            Share
          </DropDownItem>
        </DropDown>

        <div>CONTENT CONTENT CONTENT</div>
        <div>CONTENT CONTENT CONTENT</div>
        <div>CONTENT CONTENT CONTENT</div>
        <div>CONTENT CONTENT CONTENT</div>
      </header>
    </div>
  )
}

export default App
