import React from 'react'; // next는 import React가 필요없음
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

// pages 폴더안에있는 코드를 code spliting 해서 빌드해놓는다
const Home = () => {
    const { me } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    console.log(mainPosts)
    return (
        <AppLayout>
            { me && <PostForm />}
            
            { mainPosts.map((post, index) => <PostCard key={post.id} post={post} />)}
            
        </AppLayout>
    )
}

export default Home;