import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => {
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((v, i) => { // 해시태그 분리하는 정규표현식
                if (v.match(/(#[^\s#]+)/)) {
                    return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
                }
                return v
            })}
        </div>
    )
}

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
}

export default PostCardContent
