import React from 'react';
import './Common.css';
import { Link } from 'react-router-dom';

export const Breadcums = ({ breadlink, breadtitle }) => {
    return (
        <div className="breadcumsmain">
            <div className="breadlink">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>/</li>
                    <li><Link to='#'>{breadlink}</Link></li>
                </ul>
                <h1>{breadtitle}</h1>
            </div>
        </div>
    )
}
