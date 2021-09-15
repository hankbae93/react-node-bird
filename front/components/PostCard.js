import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, EllipsisOutlined, HeartOutlined, MessageOutlined, HeartTwoTone } from '@ant-design/icons';

import PostImages from './PostImages';
import FollowButton from './FollowButton';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.user.me?.id);
    const { removePostLoading } = useSelector(state => state.post)
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, SetCommentFormOpened] = useState(false);

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, [])

    const onToggleComment = useCallback(() => {
        SetCommentFormOpened((prev) => !prev);
    }, [])

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id
        })
        console.log(post.id)
    }, [])

    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined  key="retweet"/>,
                    liked 
                    ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike}/>,                                        
                    <MessageOutlined  key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id 
                            ? (
                                <>
                                <Button>수정</Button>
                                <Button type="danger" onClick={onRemovePost} loading={removePostLoading}>삭제</Button>
                                </>
                            )
                            :<Button>신고</Button>
                            }                            
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={id && <FollowButton post={post} />}
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content}/>}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post}/>
                    <List 
                    header={`${post.Comments.length}개의 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments}
                    renderItem={(item) => (
                        <li>
                            <Comment 
                                author={item.User.nickname}
                                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                content={item.content}
                            />
                        </li>
                    )}
                    />
                </div>
            )}
            {/* <CommentForm /> */}
            {/* <Comments /> */}
        </div>
    )
}
export default PostCard;

PostCard.propTypes = {
    post: PropTypes.shape({ // 객체의 경우 세부적인 것까지 검열가능
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired
}
