// 점수를 50이하 빨간색 50이상 파란색

const score = 10;
const color = 30 > score ? 'blue' : 'red'

console.log(color);


switch (color) {
    case 'red':
        console.log('빨간색!');
        break;
    case 'blue':
        console.log('파란색!');
        break;
    default:
        console.log("빨간색도 파란색도 아님");
        break;
}