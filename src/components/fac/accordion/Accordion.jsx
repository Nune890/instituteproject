import styles from "./Accordion.module.css";

export default function Accordion({ elem, setId, isShow }) {
  
  const itemId = (id) => {  
    setId(id);
  };


  return (
    <div
      className={isShow ? styles.open : styles.close}
      onClick={() => itemId(elem.id)
      }
    >
      <p
      style={{color:"#292925"}}
      >{elem.question}</p>
      <span className={styles.pluss}
      style={{color: "#505050"}}
      >{isShow ? "-" : "+"}</span>

      {isShow ? <p>{elem.answer}</p> : null}
    </div>
  );
}
