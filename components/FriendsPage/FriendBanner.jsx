import Image from 'next/image';
import React from 'react';
import banner from '../../asserts/fb1.png'

const FriendBanner = () => {
    return (
<section class="relative mt-6 bg-white">
    <div class=" bg-white">
        <Image class="w-full h-[60vh]  object-cover " alt="Dog Image" src={banner}  />
    </div>

    {/* <div class="absolute  hidden bg-gradient-to-r md:block"></div> */}

    {/* <div class="absolute inset-0 block  md:hidden"></div> */}


        <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left absolute top-1/2 left-[13%]">
            <h2 class="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">your new Best <br /> Friends...</h2>
        </div>
    </section>

    );
};

export default FriendBanner;