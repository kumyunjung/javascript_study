// const person = {
//     name: "keum",
//     age: 27
// }


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name}이고 ${this.age}입니다`);
    }
    goodbye() {
        console.log(`잘가세요 ${this.name}`);
    }
}

module.exports = Person; //외부에서 접근 가능