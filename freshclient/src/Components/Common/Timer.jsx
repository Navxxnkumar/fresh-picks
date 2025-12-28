import React from 'react'
import { useState, useEffect } from 'react'
import './Common.css';

export const Timer = () => {

    const [timeleft, setTimeleft] = useState(gettimeleft());

    function gettimeleft() {
        const now = new Date();

        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);

        const diff = midnight - now;

        return {
            hours: Math.floor(diff / (1000 * 60 * 60)),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeleft(gettimeleft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800" className="timecontainer">
                <span className='timer'>{String(timeleft.hours).padStart(2, '0')}h</span>
                <span className='timer'>{String(timeleft.minutes).padStart(2, '0')}m</span>
                <span className='timer'>{String(timeleft.seconds).padStart(2, '0')}s</span>
            </div>
        </div>
    )
};
