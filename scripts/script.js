'use strict'
// Lesson 4
// Задание 1
// let number;
// function getNumber(number){
//     if (number < 0 || number > 999 || !Number.isInteger(number)){
//         console.log('Число должно имень значение от 0 до 999 и быть не дробным(целым)');
//         return {}
//     }
//     let digitNumber = {
//         units: number % 10,
//         tens: Math.floor(number / 10) % 10,
//         hundreds: Math.floor(number / 100),
//      };
//      return  {digitNumber};
// };
// console.log(getNumber(110));


// Задание 2
// let basket = {
//          items: [
//         {
//             name: 'Сок',
//             price: 123,
//             count: 1,
//         },
//         {
//             name: 'Хлеб',
//             price: 321,
//             count: 2,
//         }
//     ],
//     countBasketPrice(){
//        return this.items.reduce(function (totalPrice, basketItem){
//             return totalPrice + basketItem.price;
//         }, 0);
//     }
// };

// console.log(basket.countBasketPrice());

// Lesson 5
// Задание 1

// const chessGame = {

//     createChessTable(){ 
//         const chessTable = document.createElement('table');
//         document.body.appendChild(chessTable);
//         const row = [null, 8, 7, 6, 5, 4, 3, 2, 1, null];
//         const col = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', null];
        
//         for(let i = 0; i < row.length; i++){
//             const tableRow = document.createElement('tr');
//             chessTable.appendChild(tableRow);

//             for(let j = 0; j < col.length; j++){
//                 const tableCol = document.createElement('td');
//                 tableRow.appendChild(tableCol);

//                 if((i == 0 || i == row.length - 1) && col[j] != null ){
//                     tableCol.innerText = col[j];
//                 }

//                 if(row[i] != null && (j == 0 || j == col.length - 1)){
//                     tableCol.innerText = row[i];
//                 }

//                 if(row[i] != null && col[j] != null){
//                     tableCol.classList.add('table-cell');

//                     if((i % 2 === 1 && j % 2 === 0) || (i % 2 === 0 && j % 2 === 1)){
//                         tableCol.classList.add('table-cell_black')
//                     }
//                 }

                
//             }    
//         }

//     }
// }

// chessGame.createChessTable();

// Задание 2

// const cartItem = {
//     render(good) {
//         return `<div class="good">
//                     <div><b>Наименование</b>: ${good.product_name}</div>
//                     <div><b>Цена за шт.</b>: ${good.price}</div>
//                     <div><b>Количество</b>: ${good.quantity}</div>
//                     <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
//                 </div>`;
//     }
// }

// const cart = {
//     cartListBlock: null,
//     cartButton: null,
//     cartItem,
//     goods: [
//         {
//             product_name: 'Хлеб',
//             price: 111,
//             quantity: 1,
//         },
//         {
//             product_name: 'Сок',
//             price: 222,
//             quantity: 2,
//         },
//         {
//             product_name: 'Кириешки',
//             price: 333,
//             quantity: 1,
//         },
//     ],
//     init() {
//         this.cartListBlock = document.querySelector('.cart-list');
//         this.cartButton = document.querySelector('.cart-btn');
//         this.cartButton.addEventListener('click', this.clearCart.bind(this));

//         this.render();
//     },
//     render() {
//         if (this.goods.length) {
//             this.goods.forEach(good => {
//                 this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
//             });
//             this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.getCartPrice()}`);
//         } else {
//             this.cartListBlock.textContent = 'Корзина пуста';
//         }
//     },
//     getCartPrice() {
//         return this.goods.reduce(function (price, good) {
//             return price + good.price * good.quantity;
//         }, 0);
//     },
//     clearCart() {
//         this.goods = [];
//         this.render();
//     },
// };

// cart.init();