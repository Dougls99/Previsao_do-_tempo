import styles from "./Input.module.css";
import { useState } from "react";
import search from "../img/search.svg";
import { ErrorBoundary } from "react-error-boundary";


function Input() {
  <ErrorBoundary
  


  return (

    <input
     className={styles.input} 
     onChange={handleChange}
     placeholder="Insira aqui o nome da cidade" 
     value={city}>
    
     <img 
     className={styles.search} 
     src={search} 
     alt="search"
     onClick={handleSearch}>
     </img>
    </input>>
  )
  </ErrorBoundary>
}

export default Input;