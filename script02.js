/*
Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

let cart = {
    basket :
      [
      {type: 'processor',
      brand: 'intel',
      model: 'Pentium 4500',
      price: 1000},
      {type: 'videocart',
      brand: 'nVidia',
      model: 'GForce440',
      price: 2000},
      {type: 'SSD',
      brand: 'Kingston',
      model: 'V300',
      price: 3000},
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



