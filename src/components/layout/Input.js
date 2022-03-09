import styles from "./Input.module.css";
import search from "../img/search.svg";

function Input() {
  
  return (

    <input
     className={styles.input}
     placeholder="Insira aqui o nome da cidade" 
     value={city}
     >
    
    <img
     className={styles.search} 
     src={search} 
     alt="search"
    />
    

  )
}

export default Input;