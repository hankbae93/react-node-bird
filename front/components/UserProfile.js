import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector(state => state.user);
    
    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    },[])
    
    return (
        <Card
            actions={[
                <div key="twit">짹짹 <br />{me.Posts.length}</div>,
                <div key="followings">팔로잉 <br />{me.Follwings && me.Follwings.length}0</div>,
                <div key="followings">팔로워 <br />{me.Follwings && me.Follwers.length}0</div>,
            ]}
        >
            <Card.Meta
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile
