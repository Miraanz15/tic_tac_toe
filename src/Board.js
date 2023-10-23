import React from 'react';
import Square from './Square';
import styles from './Board.module.css';

const Board = () => {
  return (
    <div className={styles.board}>
        <div className={styles.board_row}>
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className={styles.board_row}>
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className={styles.board_row}>
            <Square/>
            <Square/>
            <Square/>
        </div>
    </div>
  )
}

export default Board;