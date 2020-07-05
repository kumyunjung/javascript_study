// // constructor function 구조체를 가진 함수
// function Person(firstName, lastName, dob) {

//     this.firstName = firstName,
//         this.lastName = lastName,
//         this.dob = new Date(dob) //받은 값 초기화

//     // this.getBirthYear = function () {

//     //     return this.dob.getFullYear();

//     // }
//     // this.getFullName = function () {

//     //     return this.firstName + this.lastName

//     // }
//     this.getBirthDay = function () {
//         return this.dob.getDay();
//     }
// }

// Class 문법

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.dob = new Date(dob)
    }
    getFullName() {
        return this.firstName + this.lastName
    }
    getBirthYear() {
        return this.dob.getFullYear()
    }
}
const person1 = new Person('Yunjung', 'Kum', '1994-11-23')
const person2 = new Person('Hahyun', 'Kim', '1995-05-30')
console.log(person1);
console.log(person1.getFullName());
console.log(person1.getBirthYear());




//프로토타입을 쓰는이유 다른사람이 만들어놓은것에 추가할때 
// Person.prototype.getFullName = function () {
//     return this.firstName + this.lastName
// }
// Person.prototype.getBirthYear = function () {

//     return this.dob.getFullYear();

// }
// console.log(new Person);


// 인스턴스화 instantiate
// const person1 = new Person('Yunjung', 'Kum', '1994-11-23')
// const person2 = new Person('Hahyun', 'Kim', '1995-05-30')

// console.log(person1.getBirthYear(), person2.getBirthYear());
// // console.log(person1.getBirthDay(), person2.getBirthDay());
// console.log(person1.getFullName(), person2.getFullName());




// new Date 함수
// const today = new Date();
// console.log(today.getDay());
// console.log(today.getMonth());
// if (today.getDay() === 4) {
//     console.log('오늘은 목요일입니다');
// } else if (today.getDay() === 5) {
//     console.log('오늘은 금요일입니다');
// }