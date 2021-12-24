const express = require('express');
const bcrypt = require('bcrypt'); // 암호화(해쉬화) 라이브러리
const passport = require('passport');

const { User } = require('../models');

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { // 서버 에러
            console.error(err);
            return next(err);
        }
        if (info) { // 클라이언트 에러
            return res.status(401).send(info.reason);
        }
         // user는 패스포트 config로 들어간다. passport에서 이제 본격 로그인처리 시작 .
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr)
                return next(loginErr)
            }
            return res.status(200).json(user)
        });
    })(req, res, next);
});

router.post('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
})

router.post('/', async (req, res, next) => {
    try {
        const exUser = await User.findOne({
           where: {
               email: req.body.email,
           } 
        });
        if (exUser) {
            return res.status(403).send("이미 사용중인 아이디입니다.");
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword
        });
        // res.json();
        res.status(201).send("SIGN UP SUCCESS");
    } catch(error) {
        console.error(error)
        next(error) // 익스프레스 에러 알림 Status 500 처리
    }    
});

module.exports = router;