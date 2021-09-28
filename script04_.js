/*
* Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. 
Весь вид каталога генерируется JS.
*/


let product = {
    parts :
      [
      {type: 'Процессор',
      brand: 'intel',
      model: 'Pentium 4500',
      price: 1000},
      {type: 'Видеокарта',
      brand: 'nVidia',
      model: 'GForce440',
      price: 2000},
      {type: 'SSD-накопитель',
      brand: 'Kingston',
      model: 'V300',
      price: 3000},
      ],
      giveCatalog : function(){
        var header = document.createElement('div_0'); 
        header.innerHTML = '<h1>Каталог</h1>'
        document.body.appendChild(header);
        var catalog = document.createElement('div-1');
        catalog.className = 'div_1'    
        document.body.appendChild(catalog);
        for (el in product.parts){
          var cart = document.createElement('div-2');
          cart.className = 'div_2'
          item = (`Комлектующее: 
          ${product.parts[el]['type']} ${product.parts[el]['brand']} ${product.parts[el]['model']},
          цена: ${product.parts[el]['price']} руб.`)
          cart.innerHTML = item;
          catalog.appendChild(cart);
        }
      }
    }
  
  
product.giveCatalog()




