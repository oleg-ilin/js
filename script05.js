// Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.


function add(param1, param2) {
	return param1 + param2
}

function sub(param1, param2) {
	return param1 - param2
}

function mul(param1, param2) {
	return param1 * param2
}

function div(param1, param2) {
	return param1 / param2
}


param1 = +prompt('Введите первый параметр ');
param2 = +prompt('Введите второй параметр ');
operation = +prompt('Выберите номер опреации, где 1 - сложение, 2 - вычетание, 3 - умножение, 4 - деление: ')
switch (operation) {
	case 1 :
	alert(`Ответ: ${add(param1, param2)}`)
	break;
case 2 :
	alert(`Ответ: ${sub(param1, param2)}`);
	break;
case 3 :
	alert(`Ответ: ${mul(param1, param2)}`);
	break;
case 4 :
	alert(`Ответ: ${div(param1, param2)}`);
	break;
}
