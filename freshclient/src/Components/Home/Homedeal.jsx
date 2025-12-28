import React from 'react';
import Deal from '../../Assets/Dealbanner.png';
import { Timer } from '../Common/Timer';

export const Homedeal = () => {
    return (
        <section className='dealsection'>
            <div className="dealmain">
                <div className="dealtime">
                    <figure>
                        <img src={Deal} alt="Deal Banner" />
                        <div >
                            <span><Timer /> </span>
                        </div>
                    </figure>
                </div>
            </div>
        </section>

    )
}
