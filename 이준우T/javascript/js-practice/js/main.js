const url = "https://random-word-api.herokuapp.com/word?number=100"
axios.get(url)
    .then((res) => {
        // console.log(res.data);
        const words = res.data;
        const five = words.filter((word) => {
            return word.length === 5

        })
        console.log(five);

    }).catch((err) => {
        console.log(err);
    })