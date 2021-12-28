import React, { useEffect } from 'react'; // next는 import React가 필요없음
import { useSelector, useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

// pages 폴더안에있는 코드를 code spliting 해서 빌드해놓는다
const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector(state => state.post);

    useEffect(() => {
        if (retweetError) {
            alert(retweetError);
        }
    }, [retweetError])


    useEffect(() => {
        function onScroll() {
          if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
            if (hasMorePosts && !loadPostsLoading) {
              const lastId = mainPosts[mainPosts.length - 1]?.id;
              dispatch({
                type: LOAD_POSTS_REQUEST,
                lastId,
              });
            }
          }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
      }, [hasMorePosts, loadPostsLoading, mainPosts]);
    
    // console.log(mainPosts)
    return (
        <AppLayout>
            { me && <PostForm />}
            
            { mainPosts.map((post, index) => <PostCard key={post.id} post={post} />)}
            
        </AppLayout>
    )
}


// 화면 그리기전에 먼저 서버데이터 받아오기
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  // 브라우저가 아닌 프론트서버에서 실행되는 부분이라 쿠키를 직접 넣어줘야한다.
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) { // 쿠키가 공유될 수 있기 때문에 조심해야된다. 
    axios.defaults.headers.Cookie = cookie;    
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST
  })
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST
  })
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
})

export default Home;