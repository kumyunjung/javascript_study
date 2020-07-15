const API_KEY = "870b78d5f39197665edf475967866ee2"
const lat = 37.5652894
const lon = 126.8494653

axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)

    .then(function (response) {
        // handle success
        const w_type = document.querySelector(".weather-type")
        w_type.innerHTML = response.data.weather[0].main
        const temp = document.querySelector(".temperature")
        temp.innerHTML = response.data.main.temp
        const humidity = document.querySelector(".humidity")
        humidity.innerHTML = response.data.main.humidity


        const img = document.querySelector(".weather-icon")
        img.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)

        // 폰트어썸 쓰려다 망한거
        // const i = document.querySelector(".icon")
        // const desc = response.data.weather[0].description

        // if (desc === 'clear sky') {
        //     i.setAttribute("class", "fas fa-cloud")
        // }
        // console.log(i);


    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

const select = document.querySelector("#select")

select.addEventListener('change', (event) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${event.target.value}&appid=${API_KEY}&units=metric`)

        .then(function (response) {


            const w_type = document.querySelector(".weather-type")
            w_type.innerHTML = response.data.weather[0].main
            const temp = document.querySelector(".temperature")
            temp.innerHTML = response.data.main.temp
            const img = document.querySelector(".weather-icon")
            img.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)



        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

})