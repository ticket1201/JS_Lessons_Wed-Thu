console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/ +

//// Closure
// https://learn.javascript.ru/closure +
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures +
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898 +
// https://www.youtube.com/watch?v=pahO5XjnfLA  +

//// Сurrying
// https://learn.javascript.ru/currying-partials +
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827 +

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/ +

// Recursion
// https://learn.javascript.ru/recursion +
// https://www.youtube.com/watch?v=Kuq6oIN3PH0 +


// Task 01 +
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// const sum = (a:number) => {
//     let res = 0
//     return (b:number) => {
//         return a + b
//     }
// }
//
// console.log(sum(3)(6))

// Task 02 +
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// const makeCounter = () => {
//     let count = 0
//     return () => {
//       return  console.log(++count)
//     }
// }
//
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter();// 3


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// const makeCounter = (a:number) => {
//     let count = a
//     return {
//         increase: () => ++a,
//         decrease: () => --a ,
//         reset: () => a = 0,
//         set: (b:number) => a = b,
//     }
// }
//
// let counter = makeCounter(0)
//
// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.decrease())
// console.log(counter.reset())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore



/*const superSum = (n:number) => {
    const sum = (...args:number[]):number => {
        debugger
        let anon = (...args2:number[]) => {
          return args2.reduce( (acc,num) => acc + num, 0 )
        }

        let res = anon(...args)

        if(args.length === n){
           return  res
        }

        else {
            // @ts-ignore
            return superSum(n-1) + res
        }
    }
    return n === 0 ? 0 : sum;
}

// @ts-ignore
console.log( superSum(2)(1)(3) )*/

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// const sumTo = (n:number):number => {
//     return n === 1 ? 1 : n + sumTo(n-1)
// }
//
// console.log(sumTo(100))

// Вычислить факториал  n! = n * (n - 1) * (n - 2) * ...*1

// const factorial = (n:number):number => {
//     return n === 1 ? 1 : n * factorial(n-1)
// }
//
// console.log(factorial(3))

// const fib = (n:number):number => {
//     // return (n === 1) || (n === 2) ? 1 : fib(n-2) + fib(n-1)
//     let a = 1;
//     let b = 1;
//     for(let i = 3; i <= n; i++){
//         let c = a + b;
//         a = b
//         b = c
//     }
//     return b
// }
//
// console.log(fib(77))

//Напишите функцию printList(list), которая выводит элементы списка по одному.

/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
   }
};*/


/*
const printList = (list: { value:number, next:any }):void => {
    let next = list.next;
    console.log(list.value)
    if(next !== null){
        return printList(next)
    }
}
*/




/*const printList = (list: { value:number, next:any }):void => {
    while(list !== null){
        console.log(list.value)
        list = list.next
    }

}*/

//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

/*
const printList = (list: { value:number, next:any }):void => {
    if(list.next !== null){
       printList(list.next)
    }
    console.log(list.value)
}

printList(list)
*/



/*const printList = (list: { value:number, next:any }):void => {
    let arr: any[] = []
    while(list !== null) {
        arr = [...arr, list.value]
        list = list.next
    }
    for(let i = arr.length-1; i >= 0; i--){
        console.log(arr[i])
    }
}

printList(list)*/



// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

/*
const flat = (arr:any[]):number[] => {
    let res:number[] = [];
    for (const arrElement of arr) {
        if(Array.isArray(arrElement)){
            res = [...res, ...flat(arrElement)]
        }
        else {
            res = [...res, arrElement]
        }
    }
    return res
}

console.log(flat([[1,[5,5]],[2,[1,2,[5,3]]],[3]]))
*/

// just a plug
export default () => {};