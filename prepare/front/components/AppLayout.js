import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import Router from 'next/router';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const [searchInput, onChangeSearchInput] = useInput("")
    const { me } = useSelector(state => state.user);

    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`)
    },[])
    
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput 
                        enterButton 
                        value={searchInput}
                        onChange={onChangeSearchInput}
                        onSearch={onSearch}
                    />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>               
            </Menu>
            <Row gutter={8}>
                {/*
                    24칸 기준, 합쳐서 24면 한줄 그이상은 넘어간다
                    md 6 + 12 + 6 => 25% 50% 25%
                    xs: 모바일일때 
                    sm: 태블릿 
                    md: 작은 데스크탑
                */}
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/ranjafunc" target="_blank" rel="noreferer noopener">Made By Ranja</a>
                    {/*  rel="noreferer noopener" 보안 대비용*/}
                </Col>
            </Row>            
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;