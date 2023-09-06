const personFactory = (marker) => {
    return { marker };
};

const player1 = personFactory("X");
const player2 = personFactory("O");

const currentPlayer = (() => {
    this.player = player1;
    return { player };
})();

const gameboard = (() => {
    let finished = false;

    let board = new Array(3);
    for (let i=0; i<3; i++) {
        board[i] = new Array(3);
        board[i].fill(-1);
    }
    
    function isRowHomogenous(row) {
        let firstValue = row[0];
        if (firstValue === -1) {
            return false;
        }
        for (i=0; i<3; i++) {
            if (row[i] !== firstValue) return false;
        }
        return true;
    }

    function isFinished() {
        // check if rows have matches
        for (let i=0; i<3; i++) {
            if (isRowHomogenous(board[i])) {
                return true;
            }
        }

        // check if cols have matches

        // check if diagonals have matches

        return false;
    }

    return { isFinished, board }
})();

const display = (() => {
    let tiles = document.getElementsByClassName("grid-box");

    Array.from(tiles).forEach((element) => {
        element.addEventListener("click", () => {
            // don't allow a tile's text to be changed once set; also skips player switch logic
            if (element.innerHTML) return;
            if (gameboard.isFinished()) return;

            element.textContent = currentPlayer.player.marker;

            let row = parseInt(element.getAttribute("row"));
            let col = parseInt(element.getAttribute("col"));
            gameboard.board[row][col] = currentPlayer.player.marker;

            if (gameboard.isFinished()) {
                const node = document.createElement("h1");
                node.textContent = currentPlayer.player.marker + " WINS";
                document.body.appendChild(node);
            }

            // switch player
            currentPlayer.player = (currentPlayer.player === player1) ? player2 : player1;
        });
    });
})();