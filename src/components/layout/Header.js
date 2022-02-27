import styles from "./Header.module.css";

function Header() {
  return (

  <header className={styles.header}>
    <h1>Previsão de tempo</h1>
    <input className={styles.input} placeholder="Insira aqui o nome da cidade"></input>
    
  </header>
  );
}

export default Header