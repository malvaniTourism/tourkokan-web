import React from 'react'
import { useRouter } from 'next/router';

const BlogPost = () => {
    let router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            This is {slug}
        </div>
    )
}

export default BlogPost
