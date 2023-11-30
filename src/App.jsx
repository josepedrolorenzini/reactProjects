import { useState } from 'react';

function Square({value  , onSquareClick }) {
  // const [value, setValue] = useState(null);

  // function handleClick(e) {
  //   setValue('X');
  //   e.target.style.backgroundColor = "aqua";
  //   console.log(e.target)
  // }

  return (
    <button className="square" 
    //onClick={handleClick} 
    onClick={onSquareClick}
    > {value}  </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(i) {
    const nextSquare = squares.slice();
    nextSquare[i] = "X";
    setSquares(nextSquare)
    console.log(nextSquare)

  }

  return (
    <>
        <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

///https://react.dev/learn/tutorial-tic-tac-toe
///https://hygraph.com/blog/routing-in-react