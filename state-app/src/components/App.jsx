import { useState } from 'react'
import './App.css'
import Counter from './Counter/Counter'
import LikeButton from './LikeButton/LikeButton'

const App = () => {

  const [theme, setTheme] = useState('light')

  const handleTheme = e => {
    setTheme(e.currentTarget.value)
  }

  return (

    <div className={`App ${theme}`}>

      <select onChange={handleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
        <option value="contrast"> High contrast </option>
      </select>

      <Counter />

      <LikeButton />

    </div>

  )
}

export default App