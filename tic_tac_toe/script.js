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
const player = (name, number, symbol) => {
    return {
        name,
        number,
        symbol}
};
const playGame = (() => {
    //todo:get name logic
    const player_1 = player("mateo", 1,"x");
    const player_2 = player("andres",2,"o");
    let turn = 1;
    const check_winner = () => {
        symbol = current_player.symbol;
        current_board = gameBoard.gameboard;
        if (current_board[0] === symbol && current_board[1] === symbol && current_board[2] === symbol){
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
    const check_tie = () => {
        if (check_winner()== false && gameBoard.gameboard.includes(" ") === false){
            return true
        }
        return false
    }
    const winner_message = (player) => {
        message = document.createElement("div");
        message.textContent = player.name + " is the winner!";
        board = document.getElementById("gameBoard");
        board.appendChild(message);
    }
    const tie_message = () => {
        message = document.createElement("div");
        message.textContent = "it's a tie!";
        board = document.getElementById("gameBoard");
        board.appendChild(message);
    }
    const make_move = () => {
        if (turn%2 == 0){
            current_player = player_2;
        }
        else{
            current_player = player_1;
        }
        //end
        cells = document.querySelectorAll(".boardCell")
        cells.forEach((cell) => {
        // add event only if the cell is free
            if (gameBoard.gameboard[cell.value] === " "){
                cell.addEventListener("click",() => {
                //conection from cell to the array
                cell.textContent = current_player.symbol;
                index = cell.value;
                gameBoard.gameboard[index] = current_player.symbol;
                gameBoard.refreshBoard();
                gameBoard.renderBoard();
                console.log(current_player)
                //end game logic loop
                if (check_winner() === true){
                    winner_message(current_player)
                    return
                }
                else if ( check_tie() === true){
                    tie_message()
                    return
                }
                turn+= 1;
                make_move();
        })}})
    }
    //todo: play game logic
    gameBoard.renderBoard();
    make_move()
    //events logic
})();
const display = (()=> {

})()