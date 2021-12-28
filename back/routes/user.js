const express = require('express');
const bcrypt = require('bcrypt'); // 암호화(해쉬화) 라이브러리
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Post, Posts } = require('../models');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /user
    console.log(req.headers);
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
router.get('/:userId', async (req, res, next) => { // GET /user/1
    try {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.params.userId },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      if (fullUserWithoutPassword) {
        const data = fullUserWithoutPassword.toJSON();
        data.Posts = data.Posts.length; // 개인정보 침해 예방
        data.Followers = data.Followers.length;
        data.Followings = data.Followings.length;
        res.status(200).json(data);
      } else {
        res.status(404).json('존재하지 않는 사용자입니다.');
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
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

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {
        await User.update({
            nickname: req.body.nickname
        }, {
            where: { id : req.user.id }
        })
        res.status(200).json({ nickname: req.body.nickname })
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.get('/followers', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id }})
        if (!user) {
            res.status(403).send('존재하지 않는 계정입니다.');
        }
        const followers = await user.getFollowers();
        res.status(200).json(followers)
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.get('/followings', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id }})
        if (!user) {
            res.status(403).send('존재하지 않는 계정입니다.');
        }

        const followings = await user.getFollowings();
        res.status(200).json(followings)
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.params.userId }})
        if (!user) {
            res.status(403).send('존재하지 않는 계정입니다.');
        }

        await user.addFollowers(req.user.id)
        res.status(200).json({ UserId : parseInt(req.params.userId) })
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.params.userId }})
        if (!user) {
            res.status(403).send('존재하지 않는 계정입니다.');
        }

        await user.removeFollowers(req.user.id)
        res.status(200).json({ UserId : parseInt(req.params.userId) })
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.params.userId }})
        if (!user) {
            res.status(403).send('존재하지 않는 계정입니다.');
        }

        await user.removeFollowings(req.user.id)
        res.status(200).json({ UserId : parseInt(req.params.userId, 10) })
    } catch (error) {
        console.error(error);
        next(error);
    }
})

module.exports = router;