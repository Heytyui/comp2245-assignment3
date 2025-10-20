window.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const cells = board.getElementsByTagName('div');


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
});
