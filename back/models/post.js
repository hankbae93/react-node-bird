module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { // MYSQL에서는 Posts 테이블 생성
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        charset: "utf8",
        collcate: 'utf8mb4_general_ci' // 한글저장, 이모지 포함저장
    });

    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // 작성자
        db.Post.belongsToMany(db.Hastag); 
        db.Post.hasMany(db.Comment); 
        db.Post.hasMany(db.Image); 
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // 포스트에 좋아요를 누른 사람들
        db.Post.belongsTo(db.Post, {as: 'Retweet'}) // 리트윗
    };
    return Post;
}