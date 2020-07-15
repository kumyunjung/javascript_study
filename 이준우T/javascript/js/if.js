const x = 20;
const y = 15;

if (x === 10) {
    console.log('x는 10이다');
} else if (x === 20) {
    console.log('x는 20이 아니다');
} else {
    console.log('x는 10이 아니다');
}

// == 모양만 비교 === 데이터타입까지 비교

//or
// if (x > 5 && x < 30) {
//     console.log('x는 합격입니다');
// } else {
//     console.log('x는 불합격입니다');
// }

if (x > 5 && x < 30) {
    if (y > 10) {
        console.log('최종합격입니다');
    }
}