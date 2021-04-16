import React from 'react';
import vid from "../assets/waking-up/g9b8qiqlic.webm"

const Start = () => {
    return (
        <div  >
            <video autoPlay muted loop id="vid" >
                <source src={vid} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Start planning your day</h1>
                <button className="btn-success start-btn">
                    <a href="/login" >Get Started</a>
                </button>
            </div>
        </div>
    )
};

export default Start;
