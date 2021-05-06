const gameBoard = (() => {
    let gameboard = [" "," "," "," "," "," "," "," "," "]
    
    const refreshBoard = () => {
        //erase current rendered board
        let current_board = document.querySelector(".board");
        let game_board = document.getElementById("gameBoard");
        game_board.removeChild(current_board);
    }
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
                // add event of pressing the cell
                cell.value = index;
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
        refreshBoard()
        //3.print new board
        renderBoard();
    }

    return {
        renderBoard,
        refreshBoard,
        resetBoard,
        gameboard,
    }
})();
const player = (number, symbol) => {
    return {
        number,
        symbol}
}
const playGame = (() => {
    let current_board = gameBoard;
    let turn = 1;
    let player_1 = player(1,"x");
    let player_2 = player(2,"o");

    //todo: play game logic
    gameBoard.renderBoard();
    if (turn%2 == 0){
        current_player = player_2;
    }
    else{
        current_player = player_1;
    }
    console.log(current_player)
    cells = document.querySelectorAll(".boardCell")
    cells.forEach((cell) => {
        // add event only if the cell is free
        if (gameBoard.gameboard[cell.value] === " "){
            cell.addEventListener("click",() => {
            //conection from cell to the array
            cell.textContent = current_player.symbol;
            gameBoard.refreshBoard;
            gameBoard.renderBoard;
        })}
    })
})();