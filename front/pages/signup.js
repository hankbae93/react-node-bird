import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import Router from 'next/router';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';

const ErrorMessage = styled.div`
    color: red;
`

const SignUp = () => {
    const dispatch = useDispatch();
    const { signUpLoading, signUpDone, signUpError, me } = useSelector(state => state.user)

    useEffect(() => {
        if ((me && me.id)) {
            Router.replace('/') // push는 뒤로가기하면 그페이지 나오지만 replace는 기록이 사라짐
        }
    }, [me && me.id])

    useEffect(() => {
       if(signUpDone) {
        Router.push('/')
       }
    }, [signUpDone])
    useEffect(() => {
       if(signUpError) {
        alert(signUpError)
       }
    }, [signUpError])

    const [email, onChangeEmail] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [password, onChangePassword] = useInput("");
    
    const [passwordCheck, setPasswordCheck] = useState("");  
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {        
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [passwordCheck]);
    
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false)
    }, []);  

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true)
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(email, nickname, password);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname}
        })
    }, [email, password, passwordCheck, term])

    return (
        <AppLayout>
            <Head>
                <meta charset="utf-8" />
                <title>회원가입 | NodeBird</title>
            </Head>

            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">아이디</label>
                    <br />
                    <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
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
                <div>
                    <label htmlFor="user-password-check">비밀번호 체크</label>
                    <br />                    
                    <Input 
                        name="user-password-check" 
                        type="password" 
                        value={passwordCheck} 
                        onChange={onChangePasswordCheck} 
                        required 
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage> }
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>내 말에 복종할 것</Checkbox>
                    {termError && <ErrorMessage style={{ color: 'red '}}>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
                    </div>
                </div>
            </Form>
            
        </AppLayout>
    )
    
};

export default SignUp;