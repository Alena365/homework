// Функции
// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

const firstName = 'Alena'

function hello(firstName) {}

console.log(`Hello ${firstName}`)

//   2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

const numbers = [1,5,10,15,20]

function big (array) {
    for (let i = 0; i < array.length; i++) {
        if (numbers[i] > 10) {
            console.log(`Число ${array[i]} больше 10`)
        }
    }
}
console.log(big(numbers))

// 3)  Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

function sumNumbers (firstNumber,secondNumber,sign) {
    if(sign === 'minus') {
        return firstNumber - secondNumber
    } else if (sign === 'plus') {
        return firstNumber + secondNumber 
    } else if (sign === 'multiply') {
        return firstNumber * secondNumber 
    } else if (sign === 'share') {
        return firstNumber / secondNumber
    } 
}
const result = sumNumbers(5,2,'minus')
const result1 = sumNumbers(5,2,'plus')
const result2 = sumNumbers(5,2,'multiply')
const result3 = sumNumbers(5,2,'share')

console.log(result,result1,result2,result3)


// Объекты
// 1 Создайте объект с вашим описанием(имя, возраст и т.д.).

const users = {

        name: 'Alenka',
        age: 20,
        city: 'Saint-Petersburgs',
    }
    
    console.log(users)


// 2 Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const user = {
    Alena: {
    age: 27,
    city:'Saint-Petersburg',
    sayHello(name)  {
        console.log(`Hello ${name}`)
    }
}
}

user.Alena.sayHello('Alena')


// 3 Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

const customers = [
    {   name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {   name: 'John',
        age: 20,
        isAdmin: true
        },
    {   name: 'Adam',
        age: 25,
        isAdmin: true
    }
]

let regularCustomers = 0

for (let i = 0; i < customers.length; i++) {
    console.log(customers[i])
    if (customers[i].isAdmin) {
        regularCustomers++;
    }
}

console.log(`Обычные пользователи: ${regularCustomers}`)
