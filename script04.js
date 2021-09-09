/*
Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx

При желаниии рисуем пирамиду
*/


string = ''
x = 'x'
for (var i = 0; i < 20; i++) {
    string += x
    console.log(string)
}


// рисуем пирамиду
var string = "                    x";
x = 'xx'
console.log(string)

for (var el = 1; el < 20; el++) {
    string = string.slice( 1 )
    string += x
    console.log(string)
}
