module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // MYSQL에서는 users 테이블 생성
        // id가 기본적으로 들어있따
        email: {
            type: DataTypes.STRING(30), // 문자열이고 20글자 내외
            allowNull: true, // 필수
            unique: true, // 고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30), // 문자열이고 20글자 내외
            allowNull: false, // 필수
        },
        password: {
            type: DataTypes.STRING(100), // 문자열이고 20글자 내외
            allowNull: false, // 필수
        }
    }, {
        charset: "utf8",
        collcate: 'utf8_general_ci' // 한글저장
    });

    User.associate = (db) => { // 관계
        db.User.hasMany(db.Post) // 사람이 포스트를 여러개 가질 수 있다
        db.User.hasMany(db.Comment)
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); 
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });  
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' }); 
    };
    return User;
}