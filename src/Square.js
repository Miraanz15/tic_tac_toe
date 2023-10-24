import React from 'react'
import styles from './Square.module.css'

const Square = (props) => {
  return (
    <div className={styles.square} onClick={props.onClick}>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square;