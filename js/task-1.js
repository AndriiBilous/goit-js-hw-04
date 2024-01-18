"use strict";

function isEnoughCapacity(products, containerSize) {
  //1) Перетворити обʼєкт на масив;
  const arrays = Object.values(products);

  //2) Створити змінні;
  let total = 0;
  let result;

  //3) Перебрати масив через цикл;
  for (let array of arrays) {
    total += array;

    //4) Суму порівняти з параметром containerSize;
    result = total <= containerSize ? true : false;
  }

  //5) Повернути результат;
  return result;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// if(total <= containerSize){
//   result = true;
// }else{
//   result = false;
// }
