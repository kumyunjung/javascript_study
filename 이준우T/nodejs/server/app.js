const express = require('express');
const app = express();
const PORT = process.env.PORT || 5003;

app.set('views', `${__dirname}/public`)
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.use(express.static('src', {
    extensions: ['html']
}))



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/api/users', (req, res) => {
    const users = [{
        name: 'aa',
        age: 20
    }]
    res.send(users)
})
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})