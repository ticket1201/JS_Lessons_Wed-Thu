// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0] //f


// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

// Number.prototype.plus = function(n){
// 	return this + n
// }
// Number.prototype.minus = function(n){
// 	return this - n
// }
//
// console.log((2).plus(3).minus(1))

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

/*function joinin(a,b,c,d){
    return `${b}${a}${c}${a}${d}`
}

console.log(joinin('*', '1', 'b', '1c'))*/

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
	valueNode: 3,
	next: [{
		valueNode: 1,
		next: null
	},
		{
			valueNode: 3,
			next: null
		},
		{
			valueNode: 2,
			next: null
		},
		{
			valueNode: 2,
			next: [
				{
					valueNode: 1,
					next: null
				},
				{
					valueNode: 5,
					next: null
				}
			]
		}]
};


/*function treeSum(tree){
    if(tree.next===null) return tree.valueNode
    return tree.valueNode + tree.next.map(el => treeSum(el)).reduce( (pred,cur) => pred + cur, 0)
}*/


//                                           POVTORI EWE RAZ!!! ETO NE UCHEBNAYA TREVOGA!!!
// function treeSum(tree) {
//     let res = 0
//     let queue = [tree]
//     while (queue.length){
//         let curr = queue.pop()
//         res += curr.valueNode
//         if(curr.next){
//             curr.next.forEach(subtree => queue.push(subtree))
//         }
//
//     }
//     return res
// }
//
// console.log(treeSum(tree))


// Task 5
// исправить код, что бы работал правильно

// for (let i = 0; i < 10; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 100);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало
//
// function Book(name, author) {
// 	this.name = name;
// 	this.author = author;
// 	return this;
// }
//
// function Foo(fn, title, author){
//     return fn.call(this, title, author)
// }
//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

// function f(a, b) {
//     if (arguments.length === 2) {
//         return a + b
//     }
//     return f.bind(this, a)
// }

// console.log(f(2)(3))

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8

// function f(a) {
//     let res = a
//     let pred = a
//
//     function sum(b) {
//         if (b === undefined) {
//             return res
//         } else {
//            res += b
//            pred = b
//            return sum
//         }
//     }
//
//     return sum
// }
//
// console.log(f(2)(2)(2)())

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3

/*let one = function (fn){
   return fn === undefined ? 1 : fn.bind(null, 2)
}
let two = function (fn){
   return fn === undefined ? 2 : fn.bind(null, 2)
}


let plus = function (num){
    return num + arguments[0]
}

let minus = function (num){

}

console.log(one(plus()))*/
// Task 10
// Реализовать функцию сортировки массива пузырьком


// POVTORI!!!1
/*let arr = [1,5,3,8,7,2]

let sort = function(arr){
    let swap
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        }

    }
    return arr
}

console.log(sort(arr))*/

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.

/*let strCheck = (str) => {
    let obichnii = 0
    let fig = 0
    let kw = 0
    for (let el of str) {
        switch (el) {
            case '(': {
                obichnii += 1
                break
            }
            case ')': {
                obichnii -= 1
                if (obichnii < 0) {
                    return false
                }
                break
            }
            case '{': {
                fig += 1
                break
            }
            case '}': {
                fig -= 1
                if (fig < 0) {
                    return false
                }
                break
            }
            case '[': {
                kw += 1
                break
            }
            case ']': {
                kw -= 1
                if (kw < 0) {
                    return false
                }
                break
            }
        }
    }
    return !kw && !obichnii && !fig
}*/

//
// google-site-verification=XfoNaJ4H0gmiQZUxRp57rlmsjgIcgH-mVL9Uq1K7O_c

// console.log(strCheck('()({}){()}[][[]]{{{}}}'))

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

/*let makeSet = (arr) => {
    let res = []
    for(let dig of arr){
        if(!res.includes(dig)){
            res = [...res, dig]
        }
    }
    return res
}

console.log(makeSet([1,2,3,3,1,4]))*/

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

/*let makeDouble = (arr) => {
    let res = []
    for(let dig of arr){
        if(typeof(dig) === 'number'){
            res = [...res, dig*2]
        }
    }
    return res
}

console.log(makeDouble([1, 2, null, 7, 8, null, 3]))*/

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

/*
let Bomb = function (time){
    this.time = time
    setTimeout(()=>{
        console.log('BOOM!')
    },time)
}

let bomb = new Bomb('1000')
*/

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

/*let rle = function (str){
    let res = [str[0]]
    let num = 1
    for (let i = 1; i < str.length; i++){
        if(res[res.length - 1] === str[i]){
            num += 1;
        }
        else{
          res = [...res, num < 2 ? '' : num, str[i]];
          num = 1
        }
    }
    return res.join('')
}

console.log(rle('AAVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'))*/

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

Promise
	.resolve()
	.then(() => console.log(1))
	.then(() => console.log(2))
	.then(() => console.log(3));

Promise
	.resolve()
	.then(() => console.log(4))
	.then(() => console.log(5))
	.then(() => console.log(6));