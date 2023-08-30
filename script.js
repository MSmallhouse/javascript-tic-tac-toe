const gameboard = (() => {
    this.tiles = document.getElementsByClassName("grid-box");
    for (let i=0; i<9; i++) {
        tiles[i].textContent = "O";
    }
})();