//String(문자), Numbers(숫자), Boolean(true,false), null(빈값), undefined(정의가되어있지않은상태), Symbol

const name = "IT School";
const age = 38;
const rating = 3.5;
const isGood = true;
const evening = null;
const nextYear = undefined;

console.log(age);

// concatenation
console.log("My name is " + name + " and I am " + age + "old"); // 사용 잘 안함
console.log(`My name is ${name} and I am ${age}old`); // 백넘버 사용

const str = `My name is ${name} and I am ${age}old` // 변수에도 백넘버 사용가능
console.log(str);

const information = `저는 ${name}이고, 지어진 지는 ${age}년 만큼 되었습니다`;
console.log(information);

const name1 = "금윤정"
const age1 = 27
const area = "경주"

console.log(`제 이름은 ${name1}이고 ${age1}살입니다. 제가 사는 곳은 ${area}입니다.`);