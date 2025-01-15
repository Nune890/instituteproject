import React from 'react'
import styles from "./ProfessionsInfoItem.module.css"

const ProfessionsInfoItem = ({item}) => {
  return (
    <div className={styles.mainBox}>
        <h5>{item.title}</h5>
        <li>{item.description}</li>
    </div>
  )
}

export default ProfessionsInfoItem
