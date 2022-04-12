import { useState } from 'react'
import styles from './Home.module.css'
import search from '../img/search.svg'

function Home() {
  const [climas, setClimas] = useState('')

  const [city, setCity] = useState('')

  const handleChange = e => {
    setCity(e.target.value)
  }

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7ff113294face37b28ba685fe5a2b40&units=metric&lang=pt_br
      `
    )

    setClimas(await response.json())
  }

  return (
    <header className={styles.header}>
      <h1>Previsão do tempo </h1>

      <div className={styles.input}>
        <input
          placeholder="Insira aqui o nome da cidade"
          onChange={handleChange}
          value={city}
        />
        <img src={search} alt="search" onClick={handleSearch} />
      </div>

      {climas ? (
        <div className={styles.previsao}>
          <h3>
            {climas.name} {climas.sys.country}
          </h3>
          <p>
            {climas.main.temp}ºC {climas.weather[0].description}
          </p>
          <p>
            min {climas.main.temp_min}º máx {climas.main.temp_max}º
          </p>
          <p>Sensação {climas.main.feels_like}</p>
          <p>Humidade {climas.main.humidity}%</p>
          <p>Vento: {climas.wind.speed}km/h</p>
        </div>
      ) : (
        <div></div>
      )}
      <hr></hr>
      <h2>Capitais</h2>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </header>
  )
}

export default Home
