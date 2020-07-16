const loginButton = document.querySelector("#login")
const email = document.querySelector("#email")
const pwd = document.querySelector("#password")
const colors = ['linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)', 'linear-gradient(to right, #b92b27, #1565c0)']

loginButton.addEventListener('click', (event) => {
    // 폼 전송 방지
    event.preventDefault();
    //
    const isMailValid = emailCheck(email.value);
    const isPwdValid = passwordCheck(pwd.value);

    if (!isMailValid) {
        runNoti('이메일이 잘못되었습니다.', colors[1])
        return
    }
    if (!isPwdValid) {
        runNoti('비밀번호가 잘못되었습니다.', colors[1])
        return
    }
    runNoti('성공했습니다.', colors[0])

})

//토스트 메세지
function runNoti(message, bg) {
    Toastify({
        text: message,
        duration: 3000,
        position: "left",
        gravity: "top",
        close: true,
        newWindow: true,
        backgroundColor: bg
    }).showToast();
}

//이메일 체크
function emailCheck(value) {
    const regExpMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExpMail.test(value)
}

//비번 체크
function passwordCheck(value) {
    const regExpPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
    // const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/; 특수기호까지
    return regExpPwd.test(value)
}