const express = require('express');
const cors = require('cors')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan'); // 로깅 툴

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');
const db = require('./models')
const passportConfig = require('./passport');

dotenv.config()
const app = express();
db.sequelize.sync()
.then(() => {
    console.log('db 연결성공')
})
.catch(console.error)
passportConfig()

// 프론트단에서 보내는 데이터를 익스프레스가 라우터에서 처리할 수 있게 변환해준다.
app.use(morgan('dev'));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true, // 다른 도메인끼리 쿠키를 보내주고 싶을때
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
});

app.get('/api', (req, res) => {
    res.send('<h1>Hello Api</h1>')
});

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
// 에러처리 미들웨어 작성 가능
// app.use((err, req, res, next) => { 

// })

app.listen(3065, () => console.log("서버 실행 중 1234"))