window.addEventListener('DOMContentLoaded', function(){
    const cells = BeforeUnloadEvent.getElementsbyTagName('div');
    const board = document.getElementById('board');
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add('square');
    }
    const players = ['X', 'O'];
    let currentPlayer = players[0];

    const game = Array(9).fill(null);
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            if (!game[i]) {
                cells[i].textContent = currentPlayer;
                cells[i].classList.add(currentPlayer === 'X' ? 'O' : 'X');

            }
        });
    }
    
});