const greeting = "Hello World!";

// console.log(greeting.length); // length 글자 길이 확인 (주석처리할때 한칸 띄우고)

// console.log(greeting.toUpperCase()); // 대문자 메서드는 뒤에 ()붙이기

// console.log(greeting.toLowerCase()); // 소문자 

console.log(greeting.substring(6, 11)); // 문자열 자르기

//split
// console.log(greeting.split(' '));

const study = "HTML, CSS, Javascript, React, Vue"
console.log(study.split(', '));

const sport = "농구|배구|야구, 레슬링|마라톤|사격"
// 공으로 하는 운동과 공없이 하는 운동 구분해서 2개로 자르기
console.log(sport.split(''));
console.log(sport.substring(0, 8));
console.log(sport.substring(10, 20));