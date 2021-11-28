module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', { // MYSQL에서는 Hashtags 테이블 생성
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        }
    }, {
        charset: "utf8",
        collcate: 'utf8_general_ci' // 한글저장
    });

    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post);
    };
    return Hashtag;
}