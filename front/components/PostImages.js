import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import ImagesZoom from './ImagesZoom';
import { IMG_CDN } from '../utils/CDN';

const Img = styled.img`
    display: inline-block;
    width: 50%;    
`

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    })
    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    })

    if (images.length === 1) {
        return (
            <>
                <Img 
                role="presentation" // 굳이 클릭하지 않아도 된다는 웹 접근성 메세지
                src={IMG_CDN + images[0].src} 
                alt={IMG_CDN + images[0].src} 
                onClick={onZoom} />
                {showImagesZoom && <ImageZoom images={images} onClose={onClose} />}
            </>
        )
    }
    if (images.length === 2) {
        return (
            <>
                <Img 
                role="presentation" // 굳이 클릭하지 않아도 된다는 웹 접근성 메세지
                width="50%"
                src={IMG_CDN + images[0].src} 
                alt={IMG_CDN + images[0].src} 
                onClick={onZoom} />

                <Img 
                role="presentation" // 굳이 클릭하지 않아도 된다는 웹 접근성 메세지
                width="50%"
                src={IMG_CDN + images[1].src} 
                alt={IMG_CDN + images[1].src} 
                onClick={onZoom} />
                {showImagesZoom && <ImageZoom images={images} onClose={onClose} />}
            </>
        )
    }
    return (
        <div>
            <Img role="presentation" width="50%" src={IMG_CDN + images[0].src} alt={images[0].src} onClick={onZoom} />
            <div
                role="presentation"
                style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle'}}
                onClick={onZoom}                
            >
                <PlusOutlined />
                <br />
                {images.length - 1}
                개의 사진 더보기
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </div>
    )
}

PostImages.propType = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostImages
