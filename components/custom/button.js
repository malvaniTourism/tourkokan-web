import React from 'react'
import { useRouter } from 'next/router';

const Button = () => {
    let router = useRouter();

    const buttonClick = () => {
        router.push('/blog/balkrushna');
    }

    return (
        <div onClick={buttonClick}>
            customButton
        </div>
    )
}

export default Button
