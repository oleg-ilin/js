/*
Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

cart = {
  basket :
  {Процессор: 10000,
  Видеокарта: 4000,
  Накопитель: 10000,
  Матплата: 10000},
  countCartPrice : function(){
      sum = 0
      quantItems = 0
      for (let el in cart.basket){
      sum += cart.basket[el]
      quantItems += 1
  }
  console.log(sum)
  }
}
cart.countCartPrice()
var basketScreen = document.getElementById('basket');
basketScreen.innerHTML = `В корзине: ${quantItems} товаров на сумму ${sum} рублей `;



