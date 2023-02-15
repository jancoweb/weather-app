import api from "../../services/api";
import { useGlobalContext } from "../../globalContext/GlobalContext";
import './searchbox.css'

export default function SearchBox() {

  const { setWeather, setNotFound, weather } = useGlobalContext();

  async function getWeather(e) {
    e.preventDefault();

    const city = e.target.city.value;
    const apiKey = '79a442fb3a1fd9c4753b879538726a39'

    try {
      let response = await api.get(`weather?q=${city}&appid=${apiKey}&units=metric`);

      const currWeather = {
        temp: response.data.main.temp,
        feels_like: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        weather: response.data.weather[0].description,
        weatherIcon: response.data.weather[0].main,
        wind: response.data.wind.speed
      }
      setWeather(currWeather)
      setNotFound(false)
    } catch (e) {
      setWeather(null)
      setNotFound(true)
    }
  }

  return (
    <div className="search-box">
      <form onSubmit={(e) => getWeather(e)}>
        <span className="material-symbols-rounded location">
          location_on
        </span>
        <input type="text" required={true} name="city" placeholder="Enter your city" />
        <button type="submit"><span className="material-symbols-rounded search">
          search
        </span></button>
      </form>
    </div>
  )
}