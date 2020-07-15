//가짜json데이터
//fetch 외부 사이트 접속해서 데이터 받아올수있게 도와주는 함수
//then ~~ 하고 난 다음에
const minUserLevel = 5;
// fetch('https://jsonplaceholder.typicode.com/todos/100')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         if (json.id < minUserLevel) {
//             alert("나가!")
//             return;
//         }
//     })

// axios

// axios.get('https://jsonplaceholder.typicode.com/todos/100')
//     .then(function (response) {
//         // handle success
//         // console.log(response.data.title);
//         const title = document.querySelector("#title")
//         title.innerHTML = `유저아이디는${response.data.userId}, 아이디는${response.data.id}, 컴플리트는 ${response.data.completed}입니다`
//         title.style.background = "red"
//         const id = response.data.id
//         if (id <= 100) {
//             title.style.background = "pink"
//         } else {
//             title.style.background = "yellow"
//         }
//     })
//     .catch(function (error) {
//         location.href = "404.html"
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed, 생략가능
//     });

axios.get('http://d3818b57c01f.ngrok.io/test-object')
    .then(function (response) {

        console.log(response.data.info);
        const title = document.querySelector("#title")
        // title.innerHTML = `저는 ${response.data.info.major}학과 ${response.data.info.grade}학년 입니다.`

        const info = response.data.info //변수에 담아서
        title.innerHTML = `저는 ${info.major}학과 ${info.grade}학년입니다.`
    })
    .catch(function (error) {
        // location.href = "404.html"
        console.log(error);
    })


// 전통 ajax
// $.ajax({
//     method: 'GET',
//     url: "https://jsonplaceholder.typicode.com/todos/100", //요청할 주소 or 내부 서버일경우 파일이름
//     context: document.body
// }).done(function (res) {
//     $(this).addClass("done");
//     console.log(res);
//     console.log(res.completed, res.id, res.title, res.userId);
// }).fail(function (err) {
//     location.href = "404.html"
//     console.log(err);
// }); //url값을 res로 리턴


//팝업창 window 기능 중 하나
// window.open('index.html', 'popup', 'width=300, height=200');
// window.open('popup.html', 'popup', 'width=500, height=500');

//이미지 팝업
const btn = document.querySelector("#pop");

btn.addEventListener('click', function (e) {
    window.open('popup.html', 'popup', 'width=500, height=500');
})


//레이어팝업
const layer = document.querySelector(".layer-wrap")

const layerBtn = document.querySelector("#layer-pop")

layerBtn.addEventListener('click', function () {
    layer.style.display = "flex"
})

const closeBtn = document.querySelector(".close-btn")

closeBtn.addEventListener('click', function () {
    layer.style.display = "none"
})

//주석