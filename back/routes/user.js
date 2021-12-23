const express = require('express');
const bcrypt = require('bcrypt'); // 암호화(해쉬화) 라이브러리
const passport = require('passport');

const { User } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async(loginErr) => { //패스포트 로그인 에러처리
            if(loginErr) {
                console.error(err);
                return next(loginErr);
            }
            return res.json(user);
        })
    })(req, res, next); // 미들웨어를 확장하는 방식 ;; passport는 req,res,next를 쓸수없어서 이런식으로 확장한다고함 ;;;;;
})

router.post('/', async (req, res, next) => {
    try {
        // db에서 한번 조회
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        }) 
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });

        // res.setHeader('Access-Control-Allow-Origin', "http://localhost:3060")
        res.status(201).send({ result : 1 });
    } catch (error) {
        console.error(error);
        next(error); //익스프레스가 알아서 에러를 클라이언트에 보내준다.
    }
    
})

router.delete('/', (req, res) => {

})


module.exports = router;