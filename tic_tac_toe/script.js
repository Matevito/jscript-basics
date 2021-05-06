const gameBoard = (() => {
    let gameboard = ["x","x","o","x","x","x","o","x","o"]

    const renderBoard = () => {
        let pBoard = document.createElement("div");
        pBoard.classList.add("board");
        for (i = 0; i < 7; i+= 3){
            //print the 3 lines of the board
            let line =  document.createElement("tr");
            for(y = 0; y < 3; y++){
                //print the 3 cells of each liine 
                index = i + y;
                cell_content = gameboard[index];
                cell = document.createElement("td");
                cell.classList.add("boardCell")
                cell.textContent = cell_content;
                line.appendChild(cell);
            }
        pBoard.appendChild(line);}
        let game_board = document.getElementById("gameBoard");
        game_board.appendChild(pBoard)
    }

    const resetBoard = () => {
        //1.reset variable
        gameboard = [" "," "," "," "," "," "," "," "," "];

        //2.remove current displayed board
        let current_board = document.querySelector(".board");
        let game_board = document.getElementById("gameBoard");
        game_board.removeChild(current_board);

        //3.print new board
        renderBoard();
    }

    return {
        renderBoard,
        resetBoard
    }
})();
const player = (number, symbol) => {
    //todo: make move function
    return number, symbol
}
const playGame = (() => {
    let current_board = gameBoard;
    let player_1 = player(1,"x");
    let player_2 = player(2,"0");
})();

gameBoard.renderBoard()