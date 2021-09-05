// Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.


function addition(param1, param2) {
	return param1 + param2
}

function subtraction(param1, param2) {
	return param1 - param2
}

function multiplication(param1, param2) {
	return param1 * param2
}

function division(param1, param2) {
	return param1 / param2
}


param1 = +prompt('Введите первый параметр ');
param2 = +prompt('Введите второй параметр ');
operation = +prompt('Выберите номер опреации, где 1 - сложение, 2 - вычетание, 3 - умножение, 4 - деление: ')
switch (operation) {
	case 1 :
	alert('Ответ: ' + addition(param1, param2))
	break;
case 2 :
	alert('Ответ: ' + subtraction(param1, param2));
	break;
case 3 :
	alert('Ответ: ' + multiplication(param1, param2));
	break;
case 4 :
	alert('Ответ: ' + division(param1, param2));
	break;
}
