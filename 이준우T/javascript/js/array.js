// aray - multiple values
const numbers = new Array(1, 2, 3, 4, 5, 6)
console.log(numbers);
console.log(numbers[4]);

// various
const fruits = ["사과", "오렌지", "배"];
console.log(fruits[1]);
console.log(fruits);

//배열 강제 추가
fruits[3] = "포도";
console.log(fruits);

//배열 추가 메서드
fruits.push("망고")
console.log(fruits);

// 배열 삭제
fruits.pop();
console.log(fruits);

//배열 맨 앞에 추가
fruits.unshift("바나나");
console.log(fruits);

//isArray는 배열인지 아닌지
console.log(Array.isArray(fruits));

//몇번째 인덱스인지
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('감')); // 인덱스가 없으면 -1로 뜸

//인덱스가 있는지
const isExist = fruits.includes("사과");
console.log(isExist);