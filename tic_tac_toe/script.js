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
                line.appendChild(cell);}
            pBoard.appendChild(line);};
        let game_board = document.getElementById("gameBoard");

        let restart_btn = document.createElement("button");
        restart_btn.textContent = "replay!";
        restart_btn.addEventListener("click", () => {
            resetBoard();
            refreshBoard();
            //todo
            display.intro;
        })
        pBoard.appendChild(restart_btn);
        game_board.appendChild(pBoard);
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
const playGame = (name_1, name_2) => {
    //todo:get name logic
    const player_1 = player(name_1, 1,"x");
    const player_2 = player(name_2, 2,"o");
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
        board = document.querySelector(".board");
        board.appendChild(message);
    }
    const tie_message = () => {
        message = document.createElement("div");
        message.textContent = "it's a tie!";
        board = document.querySelector(".board");
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
    return{
        make_move
    }
};
const display = (()=> {
    const intro = () => {
        let input = document.createElement("div");
        input.classList.add("input_box")
        for (i = 1; i <3; i++){
            let cell = document.createElement("div")
            cell.textContent ="player "+ i+" name: "
            let player_ = document.createElement("input")
            player_.classList.add("input")
            cell.appendChild(player_)
            input.appendChild(cell)
        }
        start_btn = document.createElement("button");
        start_btn.textContent = "START GAME!";
        // start game logic
        start_btn.addEventListener("click",() => {
            let inputs = document.querySelectorAll(".input");
            let names = []
            inputs.forEach((name) => {
                names.push(name.value)
            });
            clean_intro();
            new_game = playGame(names[0],names[1]);
            gameBoard.renderBoard();
            new_game.make_move();
        })
        input.appendChild(start_btn);
        document.getElementById("gameBoard").appendChild(input);
    }
    const clean_intro = () => {
        input = document.querySelector(".input_box");
        document.getElementById("gameBoard").removeChild(input);
    }

    intro()
})()