/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5)
 и вернуть полученное значение (применить switch).*/


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

function mathOperation(param1, param2, operation) {
	switch (operation) {
		case 'сложение' :
			return addition(param1, param2);
		case 'вычетание' :
			return subtraction(param1, param2);
		case 'умножение' :
			return multiplication(param1, param2);
		case 'деление' :
			return division(param1, param2);
		default :
      		return("Неизвестная операция");
	}
}	


param1 = +prompt('Введите первый параметр ');
param2 = +prompt('Введите второй параметр ');
operation = prompt('Наберите название операции (сложение, вычетание, умножение, деление : ')

alert(mathOperation(param1, param2, operation))

