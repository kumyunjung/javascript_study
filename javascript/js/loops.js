const todos = [{
        id: 1,
        text: "숙제",
        isCompleted: true
    },
    {
        id: 2,
        text: "쓰레기",
        isCompleted: true
    },
    {
        id: 3,
        text: "병원",
        isCompleted: false
    },

];

//forEach, map filter, reduce

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i]);
// }

// todos.forEach(function (todo) {
//     //배열에 각 텍스트를 출력
//     console.log(todo);
// })

//map foreach처럼 사용가능하지만 그렇게 쓰는게 아님 프로퍼티 모아서 배열로 만들때

const ids = todos.map(function (todo) {
    return todo.id
})
console.log(ids);


//while문

// let i = 0
// while (i < 10) {
//     console.log(`for loop number :: ${i}`);
//     i++ // 이게 없으면 계속 돌아감
// }


// 좀 더 발전된 for문

// for (let todo of todos) {
//     console.log(todo);
// }

// 정통 for문 (요즘 잘 안씀)

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i]);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(todos[i]);
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }