import { useState } from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  const [query, setQuery] = useState('none')

  return (
    <>
      <h1>Lexi</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => {
          console.log(query)
        }}
      >
        Submit
      </button>
    </>
  )
}

export default App
