/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5)
 и вернуть полученное значение (применить switch).*/


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

function mathOperation(param1, param2, operation) {
	switch (operation) {
		case 'сложение' :
			return add(param1, param2);
		case 'вычетание' :
			return sub(param1, param2);
		case 'умножение' :
			return mul(param1, param2);
		case 'деление' :
			return div(param1, param2);
		default :
      		return("Неизвестная операция");
	}
}	


param1 = +prompt('Введите первый параметр ');
param2 = +prompt('Введите второй параметр ');
operation = prompt('Наберите название операции (сложение, вычетание, умножение, деление : ')

alert(mathOperation(param1, param2, operation))

