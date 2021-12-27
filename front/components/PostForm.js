import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { addPost, UPLOAD_IMAGES_REQUEST } from '../reducers/post';


const PostForm = () => {
    const dispatch = useDispatch();
    const { imagePaths, addPostDone, addPostLoading } = useSelector(state => state.post);
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

    const onChangeImages = useCallback((e) => {
        console.log(e.target.files)
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        })  
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData
        }) 
    })

    return (
        <Form style={{ margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
            value={text}
            onChange={onChangeText}
            maxLength={140}
            placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput} name="image" onChange={onChangeImages}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} loading={addPostLoading} htmlType="submit">
                    쨲쨲
                </Button>
            </div>
            <div>
                {imagePaths.map((v) => (
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
