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

# 라우터에서의 DB 테이블 조인하는 방법

```js
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });

    const fullPost = await Post.findOne({
      where: { id: post.id }, // 포스트 테이블의 특정 id 데이터 +
      include: [
        {
          // 해당 포스트과 관계있는 테이블 데이터 조회해서 가져오기
          model: Image,
        },
        {
          model: Comment,
        },
        {
          model: User,
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
```

# pagination

```js
const posts = await Post.findAll({
    limit: 10,
    offset: req.params.offset, //클라이언트가 가지고있는 갯수
    order: [['createdAt', 'DESC']], //최신 게시글순으로 ASC는 기본값, 오름차순
});
/*
실무에서는 offset, limit를 잘 안 쓴다?? 나는 썼는데...
limit: 5,
offset: 0,
실시간으로 갱신되는 테이블에서는 이 방법이 꼬일 수 있다.
내가생각한 다음 5개의 글과 실시간으로 추가되고 삭제되는 게시글 숫자가 다를 수 있다.
*/

맨처음에 10, 9, 8, 7, 6 총 5개를 가져왔지만 그후 새로운 작성글이 올라왔을 때
(11 추가) 10 9 8 7 6 5 4 3 2 1
offset이 5가 된후 다음 요청에서는 DB가 11부터 세어서 6, 5, 4, 3, 2, 1의 게시글을 준다.
6이 두번 요청되는 결과.

10 9 (8 삭제) 7 6 5 4 3 2 1
10, 9, 8, 7, 6 총 5개가 오지만 offset이 5가 된후 다음 요청에서는
DB가 10, 9, 7, 6, 5로 세어 원래 와야되는 5가 생략되는 결과가 나타난다.

const posts = await Post.findAll({
    where: { id: lastId }, // 마지막 id를 줘서 이 상황을 해결해볼 수 있다.
    limit: 10,
    order: [['createdAt', 'DESC']],
});
(11 추가) 10 9 8 7 6 5 4 3 2 1
lastId: 6을 보내주어 다음 요청때는 6 이후의 5개를 정상적으로 준다.
```
