import React from 'react';
import Friend from './Friend';

const Friends = () => {
    return (
        <div className='bg-[#FFFAF5]'>
            <h1 className='text-7xl text-black text-center font-semibold' >FRIENDS NEAR YOU</h1>

                <Friend/>
                <Friend/>
                <Friend/>
        </div>
    );
};

export default Friends;