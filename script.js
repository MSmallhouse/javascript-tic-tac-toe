const personFactory = (marker) => {
    const placeMarker = (element) => {
        element.textContent = marker;
    };

    return { placeMarker, marker };
};
const player1 = personFactory("X");
const player2 = personFactory("O");

const playGame = (() => {
    this.player = player1;

    return { player };
})();

const gameboard = (() => {
    this.tiles = document.getElementsByClassName("grid-box");
    Array.from(tiles).forEach((element) => {
        element.addEventListener("click", () => {
            if (element.innerHTML) {
                return;
            }
            element.textContent = playGame.player.marker;

            if (playGame.player === player1) {
                playGame.player = player2;
            }
            else {
                playGame.player = player1;
            }
        });
    });
})();