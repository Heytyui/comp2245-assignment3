window.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const cells = board.getElementsByTagName('div');
    const status = document.getElementById('status');
    const restartGameButton = document.getElementsByClassName('btn')[0];

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add('square');
    }

    const players = ['X', 'O'];
    let currentPlayer = players[0];
    const game = Array(9).fill(null);
    let gameOver = false;

    

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function () {
            if (!game[i] && !gameOver) {
                cells[i].textContent = currentPlayer;
                cells[i].classList.add(currentPlayer);
                game[i] = currentPlayer;

                if (checkWin(currentPlayer)) {
                    status.textContent= `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                    gameOver = true;
                    return;
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `It's ${currentPlayer}'s turn.`;

                if (checkDraw()) {
                    status.textContent = "It's a draw!";
                    gameOver = true;
                    return;

                }
            }
        });

    
        cells[i].addEventListener('mouseover', function () {
            cells[i].classList.add('hover');
        });

        cells[i].addEventListener('mouseout', function () {
            cells[i].classList.remove('hover');
        });
    }

    const winning_combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWin(player) {
        return winning_combos.some(combo => {
            return combo.every(index => game[index] === player);
        });
    }

    function checkDraw() {
        return game.every(cell => cell !== null);
    }



    restartGameButton.addEventListener('click', function () {
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = '';
            cells[i].classList.remove('X', 'O', 'hover');
            game[i] = null;
        }
        status.textContent = 'To play X or O , click on a square  using your mouse.';
        status.classList.remove('you-won');
        currentPlayer = players[0];
        gameOver = false;

    });
});
