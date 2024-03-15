
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('addPlayer');
    const playersContainer = document.getElementById('playersContainer');
    let currentPlayer = 1;
    button.addEventListener('click', function() {
        if (currentPlayer <= 10) {
            const player = document.createElement('div');
            player.innerHTML = `
                <h3>Плеер ${currentPlayer}</h3>
                <button id="renameButton">Переименовать</button>
                <input id="renameInput" type="text" value="${currentPlayer}">
                <button id="addFileButton">Добавить файл</button>
                <input id="fileInput" type="file">
                `;
            playersContainer.appendChild(player);
            currentPlayer++;
        } else {
            alert('Добавлено максимальное количество видеопроигрывателей');
        }
    });
});

/*
document.getElementById('addPlayerBtn').addEventListener('click', function() {
    for (let i = 1; i <= 3; i++) {
        const player = new Playerjs({id: `player$\{i\}`, file: `https://test\.plrjs\.com/sample$\{i\}\.mp4`});
        document.getElementById(`player$\{i\}`).style.marginTop = '20px';
    }
});

document.getElementById('addPlayerBtn').addEventListener('click', function() {
    for (let i = 1; i <= 10; i++) {
        if (i <= 3 || document.querySelectorAll('.player').length % 3 === 0) {
            const player = new Playerjs({ id: `player$\{\i}`, file: `https://test\.plrjs\.com/sample$\{i\}\.mp4`});
            const playerDiv = document.createElement('div');
            playerDiv.id = `player$\{i\}`;
            playerDiv.classList.add('player');
            document.getElementById('playersContainer').appendChild(playerDiv);
        }
    }
}); */