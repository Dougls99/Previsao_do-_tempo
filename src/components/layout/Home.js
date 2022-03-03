import styles from "./Home.module.css";
import search from "../img/search.svg";
import Service from "../service/Service";

function Home() {
  return (

  <header className={styles.header}>
    <h1>Previsão do tempo</h1>
    <input className={styles.input} placeholder="Insira aqui o nome da cidade"></input>
    <img className={styles.search} src={search} alt="search"></img>
    <hr></hr>
    <h2>Capitais</h2>
  </header>
  );
}

export default Home;