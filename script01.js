/*
Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны 
нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/


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

  for (let i = 0; i < 8; i++) { 
    for (let k = 0; k < 8; k++) {  
      var cell = document.createElement('div');
      cell.style.height = '70px';
      cell.style.width = '70px'; 
      number = ('<font color=red>' +numbers[i]+ '</font>');
      letter = ('<font color=red>' +letters[k]+ '</font>');
      cell.innerHTML = letter + number;
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



