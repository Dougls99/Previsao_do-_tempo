import styles from "./Home.module.css";
import Input from "./Input";


function Home() {
  return (

  <header className={styles.header}>
    <h1>Previsão do tempo</h1>
    <Input />
    <hr></hr>
    <h2>Capitais</h2>
  </header>
  );
}

export default Home;