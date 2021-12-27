import React, { useEffect } from 'react'; // next는 import React가 필요없음
import { useSelector, useDispatch } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MYINFO_REQUEST } from '../reducers/user';

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
        dispatch({
            type: LOAD_MYINFO_REQUEST
        })
        dispatch({
            type: LOAD_POSTS_REQUEST
        })
    }, []);

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

export default Home;