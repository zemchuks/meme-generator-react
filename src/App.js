import React, { Component, StrictMode } from 'react'
import './index.css'
import Header from './Components/Header'
import MemeGenerator from './Components/Memegenerator'

export default class App extends Component {
  render() {
    return (
      <StrictMode>
        <Header />
        
      <MemeGenerator />
      </StrictMode>
    )
  }
}