import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';

import { Avatar, Card } from 'antd';
import AppLayout from '../components/AppLayout';
import { LOAD_USER_REQUEST } from '../reducers/user';

const About = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <AppLayout>
      <Head>
        <title>Ranja | NodeBird</title>
      </Head>
      {userInfo
        ? (
          <Card
            actions={[
              <div key="twit">
                짹짹
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로잉
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                팔로워
                <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
              description="노드버드 매니아"
            />
          </Card>
        )
        : null}
    </AppLayout>
  );
};

/*
getStaticProps <===> getServerSideProps
- 로드할때마다 데이터가 새로 서버에서 불러와야 되지않아도 된다면
- getStaticProps는 블로그 게시글처럼 바뀌지않는 데이터일 경우 정적인 html로 빌드해줄때 사용한다.
- 서버에 무리가 덜가게 된다. 
*/

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 1,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default About;
