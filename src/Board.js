import React, {useState} from 'react';
import Square from './Square';
import styles from './Board.module.css';

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [display, setDisplay] = useState('X');
  console.log("Value = " + value);


  const onClick = () => {
     if(display === 'X'){
        setDisplay('O');
     }
     else{
        setDisplay('X');
     }
  }

  return (
    <div className={styles.board}>
        <div className={styles.board_row}>
            <Square value={'X'}/>
            <Square value={'X'}/>
            <Square value={'X'}/>
        </div>
        <div className={styles.board_row}>
            <Square value={'X'}/>
            <Square value={'X'}/>
            <Square value={'X'}/>
        </div>
        <div className={styles.board_row}>
            <Square value={'X'}/>
            <Square value={'X'}/>
            <Square value={'X'}/>
        </div>
    </div>
  )
}

export default Board;