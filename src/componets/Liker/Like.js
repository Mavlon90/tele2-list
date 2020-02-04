import React, { useState } from 'react'

export default function Like() {
    const [like, setlike] = useState(false);
    const [view, setView] = useState(22);

    const handleClick = () => {
        setlike(prevState => !prevState);
        setView(prevState => like ? prevState -1 : prevState +1);

    };

    return (
        <div>
            <div>Like</div>
            <div>
    <span>{handleClick}</span>
<span onClick={handleClick} className={like? 'liked' : undefined}>♥</span> 
            </div>
        </div>
    )
}
