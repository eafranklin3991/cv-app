import { useState } from 'react'
import '../styles/App.css'
import General from './General.jsx'
import Education from './Education.jsx'
import Practical from './Practical.jsx'

function App() {

  return (
    <div>
      <General />
      <Education />
      <Practical />
    </div>
  )
}

export default App
