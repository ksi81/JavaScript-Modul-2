'use strict';

let userInput;
const numbers = [];
let total = 0;
let inRange = false;


do {
userInput = prompt('Дай число от больше либо равно 0',`0`);
const isValidInput = userInput !== null && !Number.isNaN(userInput) && userInput >=0;
console.log(isValidInput);
// Необходимо проверить является ли введенные данные целым положительным числом. 
console.log(userInput);
if (isValidInput) {
  // console.log(isValidInput);
        if(userInput !== null) {
          console.log('ДА!');
          numbers.push(userInput);
          console.log(numbers);
            } else {
              console.log('нажат cancel');
            }
        }
        else {
          alert('Было введено не число');
        }  
} while (userInput !== null && !inRange);
alert('Вы закончили ввод');
let i ;
let sum = 0;
for (i=0; i < numbers.length; i++)
{
sum += Number(numbers[i]);
}
console.log(sum);
alert(`Общая сумма всех элементов массива: ${sum}`);
