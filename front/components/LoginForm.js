import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = () => {
    const dispatch = useDispatch();
    const { isLoggingIn } = useSelector(state => state.user);
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");       
   
    const onSubmitForm = useCallback(() => { // antd는 e.preventDefault() 적용되어있음
        console.log(id, password);
        dispatch(loginRequestAction({ id, password }));
    }, [id, password]);

   
    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input 
                    name="user-id"
                    type="email"
                    value={id} 
                    onChange={onChangeId} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    type="password"
                    value={password}
                    onChange={onChangePassword} 
                    required 
                />
            </div>            
            {/* 
            <div style={{ marginTop: 10 }}>
            인라인 스타일로 객체를 주면  {} === {} 는 false 이기때문에 리액트가 리렌더링한다. 크게 집착할 필요는 없다고함

            const style = useMemo(() => ({ marginTop: 10 }), []) 식으로 넘겨주는 방법이나 styled component 추천
            */}
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>           
        </FormWrapper>
    )
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired
}

export default LoginForm;
