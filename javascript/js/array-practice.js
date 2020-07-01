const animals = [{
        name: "monkey",
        size: "small"
    },
    {
        name: "gorilla",
        size: "big"
    },
    {
        name: "lion",
        size: "big"
    },
    {
        name: "tiger",
        size: "big"
    },
    {
        name: "hippo",
        size: "big"
    },
    {
        name: "cat",
        size: "small"
    }
]
const info = animals.map(function (animal) {
    return `${animal.name}은 ${animal.size}입니다`
})

console.log(info);

// const fruits = [{
//         name: "apple",
//         color: "red"
//     },
//     {
//         name: "orange",
//         color: "orange"
//     },
//     {
//         name: "banana",
//         color: "banana"
//     },
//     {
//         name: "grape",
//         color: "grape"
//     }
// ]


// const names = fruits.map(function (names1) {
//     return names1.name
// })
// console.log(names);



// const movie = {
//     name: "부산행",
//     actors: ["공유", "김의성", "마동석"]
// }

// movie.actors.forEach(function (item) {
//     console.log(item);
// }) //오브젝트 안에 배열을 돌리는것




// const movies = [{
//         id: 1,
//         name: "부산행"
//     },
//     {
//         id: 2,
//         name: "살인의추억"
//     },
//     {
//         id: 3,
//         name: "스타워즈"
//     },
//     {
//         id: 4,
//         name: "미션임파서블"
//     },
//     {
//         id: 5,
//         name: "분노의질주"
//     },
//     {
//         id: 6,
//         name: "해리포터"
//     },
//     {
//         id: 7,
//         name: "반지의제왕"
//     }
// ]

// movies.forEach(function (movie, index) {
//     // console.log(`${movie.id}번 영화는 ${movie.name} 입니다.`);
//     console.log(index);
// })


// const movie = {
//     name: "부산행",
//     country: "한국",
//     actors: ["공유", "김의성", "연상호", "마동석", "정유미", "김수안"]
// }

// for (let i = 0; i < movie.actors.length; i++) {
//     console.log(`${movie.name}의 ${i+1}번째 출연자는 ${movie.actors[i]} 입니다.`);
// }



//전통 for문

// for (let i = 0; i < 10; i++) {
//     console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for(let 변수 of 배열)

// for (let fruit of fruits) {
//     console.log(fruit);
// }


//배열에 접근할때는 변수[0]











// number.forEach(function (num) {
//     console.log(num);
// })