module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', { // MYSQL에서는 Comments 테이블 생성
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        // UserId : 1 
        // PostId : 3
    }, {
        charset: "utf8",
        collcate: 'utf8mb4_general_ci' // 한글저장
    });

    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}