const http = require('http');

const PORT = 5002;

// 서버 생성
http.createServer((req, res) => {
    if (req.url === '/api/users') {
        const users = [{
                name: 'keum',
                age: 27
            },
            {
                name: 'hyun',
                age: 26
            },
            {
                name: 'wendy',
                age: 28
            },
            {
                name: 'jade',
                age: 25
            },
            {
                name: 'sally',
                age: 22
            },
        ]
        res.write(JSON.stringify(users));

    } else if (req.url === '/api/todos') {
        const todos = [{
                list: 'homework',
                date: '0702'
            },
            {
                list: 'cleanup',
                date: '0703'
            },
            {
                list: 'lundry',
                date: '0704'
            },
            {
                list: 'go to market',
                date: '0705'
            }
        ]
        res.write(JSON.stringify(todos))
    } else {
        res.write('<h1>Hello Node JS</h1>');

    }
    res.end();
}).listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})