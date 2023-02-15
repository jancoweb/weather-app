import rain from '../../assets/rain.png'
import snow from '../../assets/snowy.png'
import thunderstorm from '../../assets/storm.png'
import clear from '../../assets/clear.png'
import clouds from '../../assets/cloudy.png'
import temp from '../../assets/thermometer.png'
import wind from '../../assets/wind.png'
import humidity from '../../assets/humidity.png'
import './found.css'
import { useGlobalContext } from "../../globalContext/GlobalContext";


export default function FoundCity() {
  const { weather } = useGlobalContext();
  console.log(weather)

  function setIcon(weather) {
    let icon = weather.weatherIcon;
    if (icon == 'Drizzle') return icon = rain
    if (icon == 'Snow') return icon = snow
    if (icon == 'Thunderstorm') return icon = thunderstorm
    if (icon == 'Clear') return icon = clear
    if (icon == 'Clouds') return icon = clouds
  }

  return (
    <div className='found'>
      <img className='icon' src={setIcon(weather)} alt="" />
      <div className='weather-data'>
        <div className="temp">
          <h2>{`${Math.round(weather.temp)}`}</h2>
          <img className='temp-img' src={temp} alt="" />
        </div>
        <p className='weather-desc'>{weather.weatherIcon}</p>
        <div className='misc'>
          <div className="wind">
            <div>
              <img className='temp-img' src={wind} alt="" />
              <p>{weather.wind}<span className='km'>km/h</span></p>
            </div>
            <span>Wind speed</span>
          </div>
          <div className="humidity">
            <div>
              <img className='temp-img' src={humidity} alt="" />
              <p>{weather.humidity}%</p>
            </div>
            <span>Humidity</span>
          </div>
        </div>
      </div>
    </div>
  )
}