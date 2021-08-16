import React from 'react';
import PropType from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

// 페이지들의 공통된 부분 담당
const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />

        </>
    )
};

NodeBird.propType = {
    Component: PropType.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);