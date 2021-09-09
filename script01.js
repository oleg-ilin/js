/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/


function simpleNumber(number){
	for (var count = 2; count < number; count++){
		if (number % count == 0)
			return false
		else (res = true)
	}
	return res
}

count = 3
document.write('Простые числа от 0 до 100:   2 ')
while (count <= 100) {
    if (simpleNumber(count) == true){
        document.write(`${count} `)
    }
    count++
}





// решение 2 через for

var arr = []
for (var count = 3; count <= 100; count++){
	arr.push(count)
}

document.write('Простые числа от 0 до 100:   2 ')
for (el of arr) {
	if (simpleNumber(el) == true)
		document.write(`${el} `)
}



