import { useState } from "react";
import styles from "./Home.module.css";
import search from "../img/search.svg";

function Home() {

  const [city, setCity] = useState("")

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch()
  }

  return (

  <header className={styles.header}>
    <h1>Previsão do tempo</h1>
    <div className="Previsao">
    </div>
    <div>
    <input
     className={styles.input}
     placeholder="Insira aqui o nome da cidade"
     onChange={handleChange}
     value={city}
    /> 
    <img
     className={styles.search} 
     src={search} 
     alt="search"
    />
    </div>
    <hr></hr>
    <h2>Capitais</h2>
  </header>
  );
}

export default Home;