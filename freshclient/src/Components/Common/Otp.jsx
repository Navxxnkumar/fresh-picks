import React from 'react'
import { useState, useRef } from 'react';
import './Common.css';

export const Otp = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputs = useRef([]);

    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;   // only numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (value && index < 3) {
            inputs.current[index + 1].focus();
        }

        // Move back on delete
        if (!value && index > 0) {
            inputs.current[index - 1].focus();
        }
    };
    return (
        <div>
            <div className="otp-inputs">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        ref={(el) => (inputs.current[index] = el)}
                        onChange={(e) => handleChange(e.target.value, index)}

                    />
                ))}
            </div>
        </div>
    )
}
