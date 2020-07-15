//  사이드바 
$(".side-bar").hide();
$(window).scroll(function () {
    const scroll = $(document).scrollTop();
    console.log(scroll);
    if (scroll > 350) {
        $(".side-bar").fadeIn(60);
        $(".side-bar").css("top", "400px");
    } else {
        $(".side-bar").hide();
        $(".side-bar").css("top", "400px");
    }
})

const upBtn = document.querySelector(".up");

upBtn.addEventListener('click', function (e) {
    const scroll = $('html, body').scrollTop(0)
    scroll == 0;
});


// 팝업
const call = document.querySelector("#call");

// call.addEventListener('click', function (e) {
//     window.open("popup.html", "popup", "width=500,height=500"); //팝업
// })

const layWrap = document.querySelector(".layer-wrap");
const layerBtn = document.querySelector(".call-btn");

layerBtn.addEventListener('click', function (e) {
    layWrap.style.display = 'flex'; //레이어팝업
})

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener('click', function (e) {
    layWrap.style.display = 'none';
})

//확인

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener('click', function (e) {

    const select = document.querySelector("#currSelect");
    const name = document.querySelector("#c_name");
    const tel = document.querySelector("#c_tel");
    const tel2 = document.querySelector("#c_tel2");
    const tel3 = document.querySelector("#c_tel3");
    const content = document.querySelector("#in-content");
    const ck = document.querySelector("#Ck");


    if (select.value == "") {
        alert("과정을 선택해주세요.");
        select.focus();
        return false;
    } else if (name.value == "") {
        alert("이름을 입력하세요.");
        name.focus();
        return false;
    } else if (tel.value == "") {
        alert("전화번호를 입력하세요.");
        tel.focus();
        return false;
    } else if (tel2.value == "") {
        alert("전화번호를 입력하세요.");
        tel2.focus();
        return false;
    } else if (tel3.value == "") {
        alert("전화번호를 입력하세요.");
        tel3.focus();
        return false;
    } else if (content.value == "") {
        alert("기타사항을 입력하세요.");
        content.focus();
        return false;
    } else if (ck.checked == false) {
        alert("개인정보 동의하세요.");
        ck.focus();
        return false;
    }
    layWrap.style.display = 'none';
});