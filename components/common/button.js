import { useRouter } from 'next/router'
import React from 'react'

const Button = () => {
    let router = useRouter();

    const buttonClick = () => {
        router.push('blog/pranav')
    }

    return (
        <div onClick={buttonClick}>
            commonButton
        </div>
    )
}

export default Button
