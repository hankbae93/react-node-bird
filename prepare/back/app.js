const express = require('express');
const cors = require('cors')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan'); // 로깅 툴
const path = require('path')
const hpp = require('hpp');
const helmet = require('helmet');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');
const hashtagRouter = require('./routes/hashtag');
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

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet())
    app.use(cors({
        origin: "http://nodebird.shop",
        credentials: true, // 다른 도메인끼리 쿠키를 보내주고 싶을때
    }))
} else {
    app.use(morgan('dev'));
    app.use(cors({
        origin: true,
        credentials: true, // 다른 도메인끼리 쿠키를 보내주고 싶을때
    }))
}

app.use('/', express.static(path.join(__dirname, 'uploads')))
// 프론트단에서는 localhost:3065로만 볼 수 있고 실제 어느 폴더에 있는지 알 수 없다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
        domain: process.env.NODE_ENV === 'production' && ".nodebird.shop"
    }
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
app.use('/hashtag', hashtagRouter);


app.listen(80, () => console.log("서버 실행 중 1234"))