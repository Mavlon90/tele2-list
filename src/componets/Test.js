import React, { useState } from 'react'

export default function Test() {
    const [items, setItems] = useState([]);

    const handleClick = () => {
            setItems(prevState => [...prevState, 'test']);
    };

    return (
        <>
            <div>
                <button onClick={handleClick}>Click me</button>    
            </div>
                {items.map((o, index) => <div>{o} {index + 1}</div>)}
         </>
    )
}
