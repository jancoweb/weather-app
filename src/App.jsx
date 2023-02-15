import SearchBox from "./components/searchBox";
import { useGlobalContext } from "./globalContext/GlobalContext";
import NotFound from "./components/notFound";
import FoundCity from "./components/foundCity";
import './App.css'

function App() {
  const { notFound, weather } = useGlobalContext();

  return (
    <div className="container">
      <div className="App">
        <SearchBox />
        {
          notFound && <NotFound />
        }
        {
          weather && <FoundCity />
        }
      </div>
      <footer>
        <a target='blank' style={{ color: 'white' }} href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by iconixar - Flaticon</a>
      </footer>
    </div>
  )
}

export default App
