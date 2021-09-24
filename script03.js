function createChessboard(){
    var chessboard = document.createElement('div');
    chessboard.style.display = 'flex';
    chessboard.style.flexWrap = 'wrap';
    chessboard.style.height = '560px';
    chessboard.style.width = '560px';
    chessboard.style.border = 'solid';
    document.body.appendChild(chessboard);
    
    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    numbers = ['8', '7', '6', '5', '4', '3', '2', '1']
    dictPiece = {
      A1 : 'БЛ', B1 : 'БК', C1 : 'БС', D1 : 'БФ', E1 : 'БКор', F1 : 'БС', G1 : 'БК', H1 : 'БЛ',
      A2 : 'БП', B2 : 'БП', C2 : 'БП', D2 : 'БП', E2 : 'БП', F2 : 'БП', G2 : 'БП', H2 : 'БП',
      A7 : 'БП', B7 : 'БП', C7 : 'БП', D7 : 'БП', E7 : 'БП', F7 : 'БП', G7 : 'БП', H7 : 'БП',
      A8 : 'ЧЛ', B8 : 'ЧК', C8 : 'ЧС', D8 : 'ЧФ', E8 : 'ЧКор', F8 : 'ЧС', G8 : 'ЧК', H8 : 'ЧЛ',
    }
  
    for (let i = 0; i < 8; i++) { 
      for (let k = 0; k < 8; k++) {  
        var cell = document.createElement('div');
        cell.style.height = '70px';
        cell.style.width = '70px'; 
        number = ('<font color=red>' +numbers[i]+ '</font>');
        letter = ('<font color=red>' +letters[k]+ '</font>');
        piece = ('<font color=blue>' +dictPiece[letters[k]+numbers[i]]+ '</font>')
        if(piece == "<font color=blue>undefined</font>"){
          cell.innerHTML = letter + number
        } else {
          cell.innerHTML = letter + number + piece
        }
        if((i + k) % 2 === 0 ){ 
          cell.style.background = 'black';
        }else{
          cell.style.background = 'white'
        } 
        chessboard.appendChild(cell);
      }
    }
  }
  
  createChessboard()
  
  
  
  