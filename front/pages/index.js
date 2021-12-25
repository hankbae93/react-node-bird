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
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(state => state.post);

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
            const scrollY = window.scrollY;
            const viewHeight = document.documentElement.clientHeight;
            const domHeight = document.documentElement.scrollHeight
            // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
            //  얼마나 내렷ㅈ는지 + 뷰포트 높이 === 총길이
            if (scrollY + viewHeight >= domHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                    })
                }                
            } 
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [hasMorePosts])
    
    // console.log(mainPosts)
    return (
        <AppLayout>
            { me && <PostForm />}
            
            { mainPosts.map((post, index) => <PostCard key={post.id} post={post} />)}
            
        </AppLayout>
    )
}

export default Home;