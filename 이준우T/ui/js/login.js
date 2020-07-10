const loginButton = document.querySelector("#login")
const colors = 'linear-gradient(to right, #91aAE4, #86A8E7, #7F7FD5)'


loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    runNoti('토스트 메세지 ! ! !', colors)

})

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