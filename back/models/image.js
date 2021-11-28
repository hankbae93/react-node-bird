module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', { // MYSQL에서는 Images 테이블 생성
        src: {}
    }, {
        charset: "utf8",
        collcate: 'utf8_general_ci' // 한글저장
    });

    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
    };
    return Image;
}