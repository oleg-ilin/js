/*
* Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. 
Весь вид каталога генерируется JS.
*/


product = {
    obj1 :
    {  
        name : 'джинсы',
        brand : 'levis',
        size : 50,
        price : 9000
    },
    obj2 :
    {
        name : 'свитер',
        brand : 'gas',
        size : 50,
        price : 10000
    },
    obj3 :
    {
        name : 'футболка',
        brand : 'H&M',
        size : 50,
        price : 10000
    },
    giveMeCatalog : function(){
        console.log('Тест')

            }
        }
product.giveMeCatalog()

