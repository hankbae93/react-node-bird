import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const follwerList = [{ nickname: "반디젤"}, { nickname: "사시미"},{ nickname: "지나베"},];
    const follwingList = [{ nickname: "반디젤"}, { nickname: "사시미"},{ nickname: "지나베"},];
    return (
        <>
        <Head>
            <meta charset="utf-8" />
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={follwerList} />
            <FollowList header="팔로워 목록" data={follwingList} />
        </AppLayout>
        </>
    )
};

export default Profile;