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
]

// console.log(todos.length)

//쓰레기 가져오기
// console.log(todos[1].text);

//3번 요소에 time = "2020-07-21"
// todos[2].time = "2020-07-21"
// console.log(todos[2]);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// object로 다시 변환
const todoObject = JSON.parse(todoJSON)
console.log(todoObject);