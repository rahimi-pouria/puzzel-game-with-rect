import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  

const Pazel = () => {
    // state array tile
    const [numberPazel, setNumberPazel] = useState([
        [10, 7, 5], [4, 2, 9], [14, 1, 13], [12, 8, 6], [11, 3, null]
      ]);

      const [finish, setFinish] = useState([
          [1, 2, 3,], [4, 5, 6], [7 , 8, 9], [10, 11, 12], [13, 14, null]
      ])
    // state move tile
    const [move, setMove] = useState(0);
    // empty index 
    const [emptyCell, setEmptyCell] = useState(15);
    // disable game state
    const [disableGame, setDisableGame] = useState(false)
    
    // moving tile function 
    const handleMove = (cell, rowIndex, cellIndex) => {
        const newNumbers = [...numberPazel];
        const cellNumber = newNumbers[rowIndex][cellIndex];
        const emptyRowIndex = parseInt((emptyCell - 1) / 3);
        const emptyCellIndex = emptyCell - (emptyRowIndex * 3) - 1;
      
        newNumbers[rowIndex][cellIndex] = null;
        newNumbers[emptyRowIndex][emptyCellIndex] = cellNumber;
        setNumberPazel(newNumbers);
        setEmptyCell(cell);

        setMove(move + 1);
        finishGame(move + 1, newNumbers, Pazel)
      }


    // event click and and call function for move tile
    const moving = (rowIndex,cellIndex) => {
        const cell = (rowIndex * 3) + (cellIndex + 1)
        if(cell - 1 === emptyCell || cell + 1 === emptyCell || cell - 3 === emptyCell || cell + 3 === emptyCell){
            handleMove(cell, rowIndex, cellIndex);
        }
        setMove(move + 1)
        finishGame(move, numberPazel, finish);
    }
    


    // function finish game
    const finishGame = (move, numberPazel, finish, cell, rowIndex, cellIndex) => {
        if(move === 81 && numberPazel === finish) {
            alert('شما برنده شدید');
        } else if(move >= 81 ){
            alert('شما باختید');
            setMove(move = 0);
            
        }
    }
    
    const newGame = (cell, rowIndex, cellIndex) => {
            setNumberPazel(numberPazel.sort((a, b) => Math.random() - 0.5));
    }

    useEffect(() => {

      }, []);

    return (

        <>
                <div className="showMove">
                    <span>Move : {move}</span>                    
                </div>
                <div className="backPazel">
                    <div className="pazelBody" disabled={disableGame} onMouseMove = {() => setDisableGame(true)}>
                    {numberPazel.map((items, rowIndex) => {
                            return (
                               <div className="bodyTiles">
                                   {items.map((subitem, cellIndex) => (
                                        <div onClick={() => moving(rowIndex, cellIndex)} className="tile" >{subitem}</div>
                                   ))}
                               </div>         
                            )
                        })}
                    </div>
                    <div className="newGame">
                        <button  
                        onClick={newGame}
                        className="newGameBtn"
                        
                        >New Game
                        </button>
                    </div>
                </div>
        </>
    )
}

export default Pazel;
