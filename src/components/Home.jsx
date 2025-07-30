import React, { useState, useEffect } from 'react';
import './css/Home.css';

function Home() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const Timer = () => {
        const now = time;
        const targetDate = new Date("2025-08-21T00:00:00"); 

        const diff = targetDate - now;

        if (diff <= 0) {
            return "Time's up!";
        }
        function padZero(value) {
            return value < 10 ? `0${value}` : value;
        }


        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = padZero(Math.floor((diff / (1000 * 60 * 60)) % 24));
        const minutes = padZero(Math.floor((diff / (1000 * 60)) % 60));
        const seconds = padZero(Math.floor((diff / 1000) % 60));

        return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    };

    return (
        <div className="home">
            <p className='timer-heading'>The Website will release in:</p>
            <p className='clock'>{Timer()}</p>
            {/* <button className=''></button><button className=""></button> */}
            
        </div>
    );
}

export default Home;
