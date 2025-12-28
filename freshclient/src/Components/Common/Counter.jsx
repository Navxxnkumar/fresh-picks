import React from 'react'
import { useState, useEffect } from 'react'

 const Counter = ({ to, speed }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = to;

        const increment = end / speed;

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                start = end;
                clearInterval(timer);
            }

            setCount(Math.floor(start));
        }, 20);
        return () => clearInterval(timer);
    }, [to, speed]);
    return (
        <div><h2>{count.toLocaleString()}+</h2></div>
    )
};
export default Counter;
