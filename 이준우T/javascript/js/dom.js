// console.log(window);
// console.log(window.location);

// alert("aaa") //window.alert 

//single element
// const form = document.querySelector("#form");
// const message = document.querySelector(".message");
// const formWrap = document.getElementsByClassName("form-wrap")

// console.log(form);
// console.log(message);
// console.log(formWrap);

//multiple element

// const items = document.querySelectorAll(".item")
// items[0].innerHTML = "aaaa"
// items[1].innerHTML = "bbbb"
// items[2].innerHTML = "cccc"
// items[3].innerHTML = "dddd"
// console.log(items);
// items.forEach(function (item) {
//     console.log(item);
// })

//삭제방법
// const ul = document.querySelector("#users")
// ul.remove();


// const form = document.querySelector("#my-form")
// form.remove();

// const ul = document.querySelector("#users")
// ul.children[1].innerText = "hello"
// ul.children[3].innerText = "world"
// ul.firstElementChild.innerText = "frontend"
// ul.lastElementChild.innerText = "javascript"

// const button = document.querySelector("#submit-button")
// button.style.background = 'red'

// button.addEventListener('click', function (event) {
//     event.preventDefault(); //기본적으로 가지고있는 기능을 막아줌
//     const ul = document.querySelector("#users");
//     ul.lastElementChild.innerText = `변경, 좌표값은 ${event.pageX}`
//     document.querySelectorAll(".item")[3].classList.add('active')
//     // document.querySelector("h2").innerText = "Javascript"
//     const h2 = document.querySelector("h2").innerText;
//     document.querySelector("h2").innerText = h2.toUpperCase();

//     console.log(event);

// })

//
// $('.btn').addClass('active');
// $('.btn').removeClass('active');

const button = document.querySelector("#submit-button")
button.style.background = 'red'

button.addEventListener('click', function (event) {
    event.preventDefault(); //기본적으로 가지고있는 기능을 막아줌

    const name = document.querySelector('#name');

    const email = document.querySelector("#email");

    const li = document.createElement('li');

    const text = document.createTextNode(`이름:${name.value} 이메일:${email.value}`)
    li.appendChild(text)


    const ul = document.querySelector("#users");
    ul.appendChild(li)
    name.value = "";
    email.value = "";
})

// const user = document.querySelector('li')
// user.addEventListener('click', function (e) {
//     li.remove();

// })