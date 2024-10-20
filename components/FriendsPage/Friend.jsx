import Image from 'next/image';
import React from 'react';
import img1 from '../../asserts/f1.png';
import img2 from '../../asserts/f2.png';
import { PiMapPinAreaFill } from "react-icons/pi";
import { IoIosHeart } from 'react-icons/io';
import { RiPinDistanceFill } from "react-icons/ri";
import { MdOutlineArrowOutward } from 'react-icons/md';

const Friend = () => {
    return (
        <div className='grid md:grid-cols-3   bg-white 
            container mx-auto shadow-xl my-5 rounded p-3 mt-2'>


            <div className='text-center flex 
            justify-center items-center flex-col' >          
            <Image 
                alt="profile" 
                src={img1} 
                className="rounded-full w-36 h-36 object-cover border-2 border-[#F88D58]" 
                />
            <p className='text-xl font-semibold text-[#302F51]'>Murphy Bear</p>
            <p className='text-xl font-semibold text-[#302F51]'>Age:2</p>
            <p className='text-xl font-semibold flex justify-center
             items-center flex-shrink-0 gap-2 text-[#302F51]'>
                 <PiMapPinAreaFill className='text-[#F88D58]'/> Houston, TX</p>
            </div>

            <div className='flex justify-center items-center flex-col gap-1'>
            <IoIosHeart className='text-red-600 text-4xl' />
            <p className='text-lg font-semibold'>Matched</p>
            <div className='flex justify-center items-center flex-shrink-0 gap-2'>
                <RiPinDistanceFill className='text-[#F88D58]'/>
                <p className='font-semibold text-3xl'>1.2 Miels</p>
                
            </div>
            <button className="btn text-white no-underline
                             bg-[#F88D58] hover:bg-black  my-2">
                                Message Me <MdOutlineArrowOutward /></button>
            </div>




            <div className='text-center flex 
            justify-center items-center flex-col' >          
            <Image 
                alt="profile" 
                src={img2} 
                className="rounded-full w-36 h-36 object-cover border-2 border-[#F88D58]" 
                />
            <p className='text-xl font-semibold text-[#302F51]'>Murphy Bear</p>
            <p className='text-xl font-semibold text-[#302F51]'>Age:2</p>
            <p className='text-xl font-semibold flex justify-center
             items-center flex-shrink-0 gap-2 text-[#302F51]'>
                 <PiMapPinAreaFill className='text-[#F88D58]'/> Houston, TX</p>
            </div>


        </div>
    );
};

export default Friend;