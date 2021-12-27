const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { User, Post, Comment, Image } = require('../models');
const { isLoggedIn } = require('./middlewares');
const router = express.Router();

// 파일 시스템 모듈로 폴더생성
try {
    fs.accessSync('uploads');
} catch (error) {
    fs.mkdirSync('uploads')
}

const upload = multer({
    storage: multer.diskStorage({ // PC 하드디스크
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname); // 확장자 추출
            const basename = path.basename(file.originalname, ext);
            done(null, basename + "_" + new Date().getTime() + ext); // 란자20211227.png
        },        
    }),
    limits: { fileSize: 20 * 1024 * 1024 }, //20mb
})

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id // 로그인한번 한 후에는 deserialize가 실행되어 쿠키해석후 유저아이디 가져온다
        })

        if (req.body.image) {
            if (Array.isArray(req.body.image)) {
                const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })))
                // Promise.all 모든 비동기 함수가 끝날때까지 기다린다. 
                await post.addImages(images)
            } else {
                const image = await Image.create({ src: req.body.image });
                await post.addImages(image)
            }
        }
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: User, // 게시글 작성자 
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            },{
                model: Comment, 
                include: [{
                    model: User, // 댓글 작성자 
                    attributes: ['id', 'nickname'],
                }]
            }, {
                model: User, 
                as: 'Likers',
                attributes: ['id'],
            }]
        })
        res.status(201).json(fullPost)
    } catch(error) {
        console.error(error);
        next(error);
    }
})

//upload single none array
router.post('/images', isLoggedIn, upload.array('image'), async (req, res, next) => {
   console.log(req.files);
   res.json(req.files.map((v) => v.filename));
})

router.post(`/:postId/comment`, isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId }
        })
        if (!post) {
            return res.status(403).send("존재하지 않는 게시글입니다.")
        }

        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId),
            UserId: req.user.id
        })     

        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }],
        })
        
        res.status(201).json(fullComment)
    } catch(error) {
        console.error(error);
        next(error);
    }
})

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId }
        })
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.')
        }
        await post.addLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id })
    } catch(error) {
        console.error(error);
        next(error);
    }    
})

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId }
        })
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.')
        }
        await post.removeLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id })
    } catch(error) {
        console.error(error);
        next(error);
    }
})

router.delete('/:postId', isLoggedIn, async (req, res, next) => {
    try {
        await Post.destroy({
            where: { 
                id: req.params.postId,
                UserId: req.user.id
            },
            
        });
        res.json({ PostId: parseInt(req.params.postId) })
    } catch (error) {
        console.error(error);
        next(error)
    }
})


module.exports = router;