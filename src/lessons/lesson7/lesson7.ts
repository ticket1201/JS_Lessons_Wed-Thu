console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance +
// https://habr.com/ru/post/518360/ +
// https://learn.javascript.ru/native-prototypes +

// Prototype
// https://learn.javascript.ru/function-prototype +
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype +


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s +
// https://www.youtube.com/watch?v=b55hiUlhAzI +


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают


// class Animal {
//     name: string;
//     constructor(name:string) {
//         this.name = name
//     }
//
//     eat() {
//         return console.log(`${this.name} eating`)
//     }
//
//     sleep() {
//         return console.log(`${this.name} sleeping`)
//     }
//
//     walk() {
//         return console.log(`${this.name} walking`)
//     }
// }
//
// let animal = new Animal('Animal')

//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

// class Monkey extends Animal{
//     roar(){
//         return console.log(`${this.name} is roaring`)
//     }
//     climb(){
//         return console.log(`${this.name} is climbing`)
//     }
// }
//
// let monkey = new Monkey('Monkey')
// console.log(monkey.walk())

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

// class Human extends Monkey{
//     speak(){
//         return console.log(`${this.name} is speaking`)
//     }
//     think(){
//         return console.log(`${this.name} is thinking`)
//     }
// }
//
// let human = new Human('Human')
//
// console.log(human.walk())

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

// function Animal(this: any) {
//     this.name = 'Animal'
//     this.eat = function () {
//         return console.log(`${this.name} eating`)
//     }
//     this.sleep = function () {
//         return console.log(`${this.name} sleeping`)
//     }
//     this.walk = function () {
//         return console.log(`${this.name} walking`)
//     }
// }
//
//
// // @ts-ignore
// let animal = new Animal()
//
//
// function Monkey(this: any) {
//     this.name = 'Monkey'
//     this.roar = function () {
//         return console.log(`${this.name} is roaring`)
//     }
//     this.climb = function () {
//         return console.log(`${this.name} is climbing`)
//     }
// }
//
// Monkey.prototype = animal
//
//
// // @ts-ignore
// let monkey = new Monkey()
//
// function Human(this:any){
//     this.name = 'Human'
//     this.speak = function(){
//          return console.log(`${this.name} is speaking`)
//      }
//     this.think = function(){
//         return console.log(`${this.name} is thinking`)
//     }
// }
//
// Human.prototype = monkey
//
// // @ts-ignore
// let human = new Human()
//
// console.dir(human)


// Task 05
// Используя метод Apply реализовать свой собственный метод bind

/*function selfBind(){
    function middle(th:object, fn: Function){
        return fn.apply(th)
    }
   return middle
}

let obj = {
    name: 'serega',
    getName(){
        return this.name
    }
}

let fn = obj.getName
let gett = selfBind()
console.log(gett(obj, fn))*/


// just a plug
export default () => {};