import React from 'react';
import AppLayout from '../components/AppLayout';
// next는 import React가 필요없음
// pages 폴더안에있는 코드를 code spliting 해서 빌드해놓는다
const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next! </div>
        </AppLayout>
    )
}

export default Home;