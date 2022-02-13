//The goal of this project is avoid contaminating the global scope


//let gameBoard = [1]; //This array will contain the gameboard 

// let Player = () => {
//     let score = 0;
//     let symbol = ["X", "O"];
//     let winningCon = false;
// };

let turn = 1; //1 will be player 1, 2 will be player 2
let cells = document.querySelectorAll(".cell");

let turnDisplay = document.getElementById('turn-display');

let playerTurn = document.createElement("h1");
playerTurn.textContent = `Player ${turn} turn`;
document.body.appendChild(playerTurn);


//Don’t forget the logic that keeps players from playing in spots that are already taken! 



let addCellId = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].id = [i];
    }
 }

markCell= (cell) => {
    if (cell.target.textContent === "X") {
        cell.target.textContent = "O"; 
        turn == 1 ? turn = 2 : turn = 1;
        playerTurn.textContent = `Player ${turn} turn`;
        console.log('turn: ', turn);
    }
    else {
        cell.target.textContent = "X";
        turn == 1 ? turn = 2 : turn = 1;
        playerTurn.textContent = `Player ${turn} turn`;
        console.log('turn: ', turn);
    }    
}

        

function fillCell (cellsAr) {
    for (let i = 0; i < cellsAr.length; i++) {
        cellsAr[i].addEventListener('click', markCell);       
    }          
}

addCellId();
fillCell(cells);








//habran dos jugadores, digamos dos perfiles.
//cada click en las celdas alterna el nro de jugador, esto seria el sistema de turnos

//nota: mapear cada celda (usando sus ids) con la posicion del array gameBoard. 
//asi cada contenido de celda/turno queda guardado en el array