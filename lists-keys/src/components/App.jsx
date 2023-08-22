import './App.css'
import DrinksList from './DrinksList/DrinksList'
import MoviesList from './MoviesList/MoviesList'
import ProjectsList from './ProjectsList/ProjectsList'

function App() {

  return (
    <div className="App">
      <MoviesList />
      <ProjectsList />
      <DrinksList />
    </div>
  )
}

export default App
