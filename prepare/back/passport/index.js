const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
    // 쿠키랑 유저 id만 서버에서 들고있다가 비교
    passport.serializeUser((user, done) => {
        done(null, user.id);
        // done(서버에러, 성공, reason 등등 )
    });

    //로그인 성공후 라우터에 접근하면 DB에 데이터받아와 보내준다.
    passport.deserializeUser(async (id, done) => { 
        try {
            const user = await User.findOne({ where: { id }});
            done(null, user) // req.user에 넣어보낸다.
        } catch(error) {
            console.error(error);
            done(error)
        }
    });

    local()
}