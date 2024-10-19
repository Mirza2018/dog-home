import Image from 'next/image';
import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import loginImg from "../../asserts/login-img.png"

const Login = () => {
    return (
        <div className='container mx-auto'>
            {/* Login  Back button*/}
            <div className='flex flex-shrink-0 items-center 
            text-xl text-[#656565] gap-4 font-bold '>
                <IoMdArrowBack className='text-3xl'/><h1 className=''> Back To Home</h1>
            </div>
            {/* Main contant */}
            <div>
                {/* Left side Image */}
                <div>
                    <Image alt='dog-Image' src={loginImg} className='h-full w-1/2 object-cover aspect-square' />
                </div>

            </div>
        </div>
    );
};

export default Login;