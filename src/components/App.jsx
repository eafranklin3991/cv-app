import { useState } from 'react'
import General from './General.jsx'
import Education from './Education.jsx'
import Practical from './Practical.jsx'

function App() {

  return (
    <div className="wrapper">
      <h1>CV Application</h1>
      <General />
      <Education />
      <Practical />
    </div>
  )
}

export default App
