var clickCnt = 0;
var lastSquare = 0;
const huPlayer = 'A';
const aiPlayer = 'B';
var turn;

const cells = document.querySelectorAll('.cell');

startGame();

function startGame() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.removeProperty('background-color');
    }
    turn = (Math.round(Math.random()) == 0) ? huPlayer : aiPlayer;
    if (turn == huPlayer) {
        document.getElementById('btnPlay').innerHTML = 'HUMEN PLAY';
    } else if (turn == aiPlayer) {
        document.getElementById('btnPlay').innerHTML = 'AI PLAY';
        fnPlay();
    }
}

function changePlayer(arg_turn) {
    if (arg_turn == huPlayer) {
        document.getElementById('btnPlay').innerHTML = 'HUMEN PLAY';
    } else if (arg_turn == aiPlayer) {
        document.getElementById('btnPlay').innerHTML = 'AI PLAY';
    }
}

function turnClick(square) {
    if (square!=lastSquare+1) return;
    cells[square-1].style.backgroundColor = (turn == huPlayer ? "blue" : "red");
    clickCnt++;
    if (clickCnt > 3) {
        alert("한도 초과");
        cells[square-1].style.removeProperty('background-color');
        clickCnt = 3;
        return;
    }
    lastSquare++;
    if (lastSquare == 31) {
        var msg = (turn == huPlayer ? "AI PLAYER의" : "HUMEN PLAYER의") + " 승리!";
        
        alert(msg);
        return;
    }
}

function fnPlay(){
    if (turn == huPlayer && clickCnt == 0) {
        alert('최소 1개 이상 클릭하세요')
        return;
    }
    clickCnt = 0;
    turn = aiPlayer;
    changePlayer(turn);
    
    var remainSquare = 31-lastSquare;
    if (remainSquare > 5) {
        var randomCnt = 0;
        randomCnt = Math.round(Math.random()*2)+1;
        for (var j = 1; j <= randomCnt; j++) {
            turnClick(lastSquare+1);
        }
    } else {
        switch(remainSquare) {
            case 5:
                turnClick(lastSquare+1);
                break;
            case 4:
                turnClick(lastSquare+1);
                turnClick(lastSquare+1);
                turnClick(lastSquare+1);
                break;
            case 3:
                turnClick(lastSquare+1);
                turnClick(lastSquare+1);
                break;
            case 2:
                turnClick(lastSquare+1);
                break;
            default:
                turnClick(lastSquare+1);
        }
    }
    
    
    clickCnt = 0;
    turn = huPlayer;
    changePlayer(turn);
}