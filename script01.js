let cart = {
    basket :
      [
      // {type: 'processor',
      // brand: 'intel',
      // model: 'Pentium 4500',
      // price: 1000},
      // {type: 'videocart',
      // brand: 'nVidia',
      // model: 'GForce440',
      // price: 2000},
      // {type: 'SSD',
      // brand: 'Kingston',
      // model: 'V300',
      // price: 3000},
      ],
      countCartPrice : function(){
        sum = 0
        quantItems = 0
        for (el in cart.basket){
          sum += cart.basket[el]['price']
          quantItems += 1
        }
        return sum
      }
    }
  
  
console.log(cart.countCartPrice())
var basketScreen = document.getElementById('basket');
basketScreen.innerHTML = `В корзине: ${quantItems} товаров на сумму ${sum} рублей `;


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
    price: 30000},
    ],
    giveCatalog : function(){




      var header = document.createElement('div-0'); 
      header.innerHTML = '<h1>Каталог</h1>'
      document.body.appendChild(header);
      var catalog = document.createElement('div-1');
      catalog.className = 'div_1'    
      document.body.appendChild(catalog);
      for (el in product.parts){
        var cart = document.createElement('div-2');
        cart.id = `id-${el}`
        cart.className = 'div_2'
        item = (` 
        ${product.parts[el]['type']} ${product.parts[el]['brand']} ${product.parts[el]['model']},
        цена: ${product.parts[el]['price']} руб.`)
        cart.innerHTML = item;

        var button = document.createElement('button')
        button.id = `id-${el}`
        button.style.height ='30px';
        button.style.width = '100px';
        button.innerText = 'Купить'
        button.addEventListener('click', test)

        function test(e){
          cart_id = e.target.id
          var txt = document.getElementById(cart_id).innerText
          console.log(txt)
        }


        cart.appendChild(button)
        catalog.appendChild(cart);
      }
    }
  }


product.giveCatalog()



