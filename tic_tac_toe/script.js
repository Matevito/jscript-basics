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
    let turn = 1;
    const player_1 = player(1,"x");
    const player_2 = player(2,"o");
    if (turn%2 == 0){
        current_player = player_2;
    }
    else{
        current_player = player_1;
    }
    //todo: logic checks winning player
    const check_winner = () => {
        symbol = current_player.symbol;
        current_board = gameBoard.gameboard;
        console.log(symbol + " i happen");
        console.log(current_board)
        if (current_board[0] === symbol && current_board[1] === symbol && current_board[2]){
            return true;
        }
        else if(current_board[3] == symbol && current_board[4] == symbol && current_board[5] === symbol){
            return true;
        }
        else if(current_board[6] == symbol && current_board[7] == symbol && current_board[8] === symbol){
            return true;
        }
        else if(current_board[0] == symbol && current_board[3] == symbol && current_board[6] === symbol){
            return true;
        }
        else if(current_board[1] == symbol && current_board[4] == symbol && current_board[7] === symbol){
            return true;
        }
        else if(current_board[2] == symbol && current_board[5] == symbol && current_board[8] === symbol){
            return true;
        }
        else if(current_board[0] == symbol && current_board[4] == symbol && current_board[8] === symbol){
            return true;
        }
        else if(current_board[6] == symbol && current_board[4] == symbol && current_board[2] === symbol){
            return true;
        }
        return false
    }

    //todo: play game logic
    gameBoard.renderBoard();
    //events logic
    cells = document.querySelectorAll(".boardCell")
    cells.forEach((cell) => {
        // add event only if the cell is free
        if (gameBoard.gameboard[cell.value] === " "){
            cell.addEventListener("click",() => {
            //conection from cell to the array
            cell.textContent = current_player.symbol;
            gameBoard.refreshBoard;
            gameBoard.renderBoard;
            turn+= 1;
            console.log(check_winner(current_player));
        })}
    })
    return {
        check_winner,
    }
})();