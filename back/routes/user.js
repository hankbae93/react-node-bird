const express = require('express');
const bcrypt = require('bcrypt'); // 암호화(해쉬화) 라이브러리
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /user
    try {
        if (req.user) {
            const user = await User.findOne({
                where: { id: req.user.id }
            })
            const fullUserWithoutPassword = await User.findOne({ 
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },                
                include: [{
                    model: db.Post,
                    attributes: ['id'] // 데이터 효율을 위해서 id만 저장한다
                }, {
                    model: db.User,
                    as: 'Followings',
                    attributes: ['id']
                }, {
                    model: db.User,
                    as: 'Followers',
                    attributes: ['id']
                }]
            })
            return res.status(200).json(fullUserWithoutPassword)
        } else {
            res.status(200).json(null);
        }
        
    } catch (error) {
        console.error(error);
        next(error);
    }
    
})

router.post('/login', isNotLoggedIn, (req, res, next) => {
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
            const fullUserWithoutPassword = await User.findOne({ 
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                // ['id', 'nickname', 'email'], // db table에서 원하는 컬럼만 고를 수 잇다 
                include: [{
                    model: db.Post,
                }, {
                    model: db.User,
                    as: 'Followings',
                }, {
                    model: db.User,
                    as: 'Followers',
                }]
            })
            return res.status(200).json(fullUserWithoutPassword)
        });
    })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
})

router.post('/', isNotLoggedIn, async (req, res, next) => {
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