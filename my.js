'use strict';

let userInput;
const numbers = [];
let total = 0;
let inRange = false;


do {
userInput = prompt('Дай число от больше либо равно 0',`0`);
const isValidInput = userInput !== null && !Number.isNaN(userInput) && userInput >=0  && !inRange;
console.log(prompt);
// console.log(userInput);
if (isValidInput) {
  // console.log(isValidInput);

        if(isValidInput && userInput !== null) {
          // console.log('ДА!');
          numbers.push(userInput);
          console.log(numbers);
            } else {
              alert('Было введено не число');
              // console.log('нажат cancel');
            }
        }
        else {
          console.log('нажат cancel');
          // alert('Было введено не число');
        }  
} while (userInput !== null && !inRange);


// alert('Вы закончили ввод');
let i ;
let sum = 0;
for (i=0; i < numbers.length; i++)
{
sum += Number(numbers[i]);
}
console.log(sum);
alert(`Вы закончили ввод. Общая сумма всех элементов массива: ${sum}`);
