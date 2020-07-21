// function sum(a, b, c) {
//     console.log(a * b / c);
// }
// sum(30, 20, 10)

const circle = document.querySelector('.circle')


function change(color) {
    circle.style.background = color
}
change('red')


function write(value) {
    circle.innerHTML = value
}

write('hello')