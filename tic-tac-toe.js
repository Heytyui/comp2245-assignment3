window.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const cells = board.getElementsByTagName('div');
    const status = document.getElementById('status');


    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add('square');
    }

    const players = ['X', 'O'];
    let currentPlayer = players[0];
    const game = Array(9).fill(null);

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function () {
            if (!game[i]) {
                cells[i].textContent = currentPlayer;
                cells[i].classList.add(currentPlayer === 'X' ? 'O': 'X');

                
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

    if (checkWin(currentPlayer)) {
        status.textContent= `Player ${currentPlayer} is the Winner!`;
        status.classList.add('you-won');
    }
});
