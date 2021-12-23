const express = require('express');
const cors = require('cors')

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models')
const passportConfig = require('./passport');

const app = express();
db.sequelize.sync()
.then(() => {
    console.log('db 연결성공')
})
.catch(console.error)
passportConfig()

// 프론트단에서 보내는 데이터를 익스프레스가 라우터에서 처리할 수 있게 변환해준다.
app.use(cors({
    origin: "*",
    credentials: false,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


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

app.use('/user', userRouter)

app.use('/post', postRouter);


app.listen(3065, () => console.log("서버 실행 중 1234"))