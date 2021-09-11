import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { addPost } from '../reducers/post';

const PostForm = () => {
    const dispatch = useDispatch();
    const { ImagePaths, addPostDone, addPostLoading } = useSelector(state => state.post);
    const [text, onChangeText, setText] = useInput("");
    
    useEffect(() => {
        if (addPostDone) {
            setText("");
        }
    }, [addPostDone])
    
    const imageInput = useRef();
    const onClickImageUpload = useCallback(e => {
        imageInput.current.click();
    }, [imageInput.current])    
    
    const onSubmit = useCallback(() => {
        dispatch(addPost(text))        
    }, [text]);

    return (
        <Form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
            value={text}
            onChange={onChangeText}
            maxLength={140}
            placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} loading={addPostLoading} htmlType="submit">
                    쨲쨲
                </Button>
            </div>
            <div>
                {ImagePaths.map((v) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm
