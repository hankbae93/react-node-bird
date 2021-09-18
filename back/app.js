const express = require('express');
const postRouter = require('./routes/post');

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
});

app.get('/api', (req, res) => {
    res.send('<h1>Hello Api</h1>')
});

app.get('/posts', (req, res) => {
    res.json([
        { id: 1, content: 'hello' },
        { id: 2, content: 'hell2o' },
        { id: 3, content: 'h3ello' },
    ])
})

app.use('/post', postRouter);


app.listen(3065, () => console.log("서버 실행 중"))