# DB 세팅

```js
npx sequelize db:create

npm run dev
```

# DB 관계형

```js
Post.associate = (db) => {
  /* 한 포스트는 한 유저에 속한다. 일 대 일 */
  db.Post.belongsTo(db.User);

  /* 한 포스트는 여러 개의 댓글을 가질 수 있다. 일 대 다 */
  db.Post.hasMany(db.Comment);
  db.Post.hasMany(db.Image);

  /* 한 포스트는 여러 개의 해시태그를 가질 수 있으면서.
    해시태그 또한 여러 개의 포스트에 속할 수 있다.
    다 대 다 */
  db.Post.belongsToMany(db.Hastag);
};
```

- 다 대 다의 경우 sequelizer가 중간 PostTable을 생성해준다.

  게시글의 id, 해시태그의 id를 관계지어 Table을 생성

  조회할 때는 게시글의 id가 1인 row의 해시태그의 id 다 가져와라

  해시태그의 id가 3인 row의 게시글 id 다 가져와라

```js
User.associate = (db) => {
  // 관계
  db.User.hasMany(db.Post); // 사람이 포스트를 여러개 가질 수 있다
  db.User.hasMany(db.Comment);
  db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });

  // 다 대 다의 두번째 케이스
  db.User.belongsToMany(db.User, {
    through: "Follow",
    as: "Followers",
    foreignKey: "FollowingId",
  });
  db.User.belongsToMany(db.User, {
    through: "Follow",
    as: "Followings",
    foreignKey: "FollowerId",
  });
};
```

- 팔로잉, 팔로워 관계를 표현할 때 같은 테이블을 활용해야 된다면 foreignKey로 이름을 바꿔서 저장해준다.
