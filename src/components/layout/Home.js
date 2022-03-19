import { useState } from "react";
import styles from "./Home.module.css";
import search from "../img/search.svg";

function Home() {

  const [city, setCity] = useState("")

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7ff113294face37b28ba685fe5a2b40
      `
    )
    .then((response) => {
      if(response.status == 200){
        return response.json()
      }
    })
    .then((data) => {
      console.log('data =>', data)
    });
  };

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
       onClick={handleSearch}
      />
    </div>
     <hr></hr>
     <h2>Capitais</h2>
  </header>
  );
}

export default Home;