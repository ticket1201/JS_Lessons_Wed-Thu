console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

/*
class People{
    name
    secName
    groupN
    score

    constructor(name:string, secName: string, groupN: number, score: Array<number>) {
        this.name = name
        this.secName = secName
        this.groupN = groupN
        this.score = score
    }

}




let student1 = new People('a', 'Al', 1, [5,1,0,5,5])
let student2 = new People('b', 'Al', 1, [5,2,0,5,5])
let student3 = new People('c', 'Al', 1, [5,3,0,5,5])
let student4 = new People('d', 'Al', 1, [5,4,0,5,5])
let student5 = new People('e', 'Al', 1, [5,5,0,5,5])
let student6 = new People('f', 'Al', 1, [5,5,1,5,5])
let student7 = new People('g', 'Al', 1, [5,5,2,5,5])
let student8 = new People('h', 'Al', 1, [5,5,3,5,5])
let student9 = new People('k', 'Al', 1, [5,5,4,5,5])
let student10 = new People('l', 'Al', 1, [5,5,0,0,5])

let arr = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]

let sortByAverage = (array:Array<any>):Array<any> => {
    return array.sort( (a:any, b:any) => {
       return a.score.reduce((pred:number,cur:number) => pred + cur, 0) - b.score.reduce((pred:number,cur:number) => pred + cur, 0)
    })
}

let showOnlyFourFive = (array:Array<any>) => {
    return array.filter(el => el.score.filter((num:number) => num > 3).length === 5)
}

console.log(showOnlyFourFive(arr))
*/


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса? у меня не получилось
// Можно ли создать метод класса который будет удалять экземпляр класса? у меня не получилось


/*class Demo{
    one
    two
    constructor(one:any, two:any) {
        this.one = one
        this.two = two
    }
}

let obj = new Demo('str', 'str2')
console.log(obj)*/

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию


/*
class Clock {
    hour
    min
    sec

    constructor() {
        this.hour
        this.min
        this.sec
    }

    showTime(){
        console.log(`${this.hour}:${this.min}:${this.sec}`)
    }

    setTime(h: number, m: number, s: number) {
        this.setHour(h)
        this.setMin(m)
        this.setSec(s)
    }

    setHour(h: number) {
        if (h >= 0 && h < 25) {
            this.hour = h
        } else {
            console.log('Enter number between 0 and 24')
        }
    }

    setMin(m: number) {
        if (m >= 0 && m < 60) {
            this.min = m
        } else {
            console.log('Enter number between 0 and 60')
        }
    }

    setSec(s: number) {
        if (s >= 0 && s < 60) {
            this.sec = s
        } else {
            console.log('Enter number between 0 and 60')
        }
    }

}

let clock = new Clock()
clock.setTime(12,33, 33)
clock.setTime(25,63, 33)
clock.showTime()
*/


// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

/*
class Buyer{
    name:any
    secName:any
    address:any
    bank:any
    constructor(name = 'user',secName = 'semen', address = '322ulica', bank = '123') {
        this.name = name
        this.secName = secName
        this.address = address
        this.bank = bank
    }
    setter(pole:string, znach:string){
        this[pole] = znach
    }
    getter(atr:string){
        console.log(this[atr])
    }
    show(){
        console.log(this)
    }
}

let buyer = new Buyer()
buyer.setter('secName', 'serega')
buyer.getter('secName')
buyer.show()

let arr = [buyer, new Buyer('Leha', 'Simen', '', '333222111')]

let sort = (arr) => {
    return arr.sort((a,b) => a.name.localeCompare(b.name))
}

let filterBank = (arr) => {
    return arr.filter((el) => el.bank > 100 && el.bank < 300)
}

console.log(sort(arr))
console.log(filterBank(arr))
*/

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};