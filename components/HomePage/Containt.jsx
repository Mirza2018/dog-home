import Image from 'next/image';
import React from 'react';
import dog1 from "../../asserts/b2.png"
import dog2 from "../../asserts/b3.png"
import { MdOutlineArrowOutward } from "react-icons/md";
import HowDoYouPlay from './HowDoYouPlay';


const Containt = () => {
    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        //     <div>
        //         <Image src={dogImage} alt='Dog Image' ></Image>
        //     </div>
        //     <div>
        //         <h1>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quo quidem non nam. Repudiandae iste reiciendis aperiam, a eaque corrupti quae suscipit velit quasi quia maiores quaerat numquam consectetur temporibus!
        //         </h1>
        //     </div>
        // </div>
        <section class="relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
        <div class="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24  sm:px-6 lg:px-8">
            <div class="">
                <Image class="w-screen" src={dog1} alt="" />
            </div>
  
        </div>

        <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24 text-center">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Add Your Profile</h2>
                <p class="mt-2 text-base text-gray-600">Find new Friends Nearby </p>


                <p class="mt-5 text-xl text-gray-600">
                Become a part of the Woof Spot community! Create a profile for your pup and discover dogs near you. Match your dog's play style with others for fun playdates and lasting friendships. 
                </p>
                <button className="btn text-white no-underline
                             bg-[#F88D58] hover:bg-black  my-2">
                                Get Started <MdOutlineArrowOutward /></button>
            </div>
        </div>
    </div>



    <div class="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
        
        <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24 text-center">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto ">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Connecting Paws, <br /> Building Community</h2>
                {/* <p class="mt-2 text-base text-gray-600">Find new Friends Nearby </p> */}


                <p class="mt-5 text-xl text-gray-600 text-justify">
                For over twenty years, I lived in the same neighborhood, but I didn’t know a single neighbor. Life was busy, and connections just didn’t happen. Then, three years ago, things changed when the tiniest,
                 goofiest puppy came into my life. Neighbors began to stop and chat during our walks, and playdates filled our calendar. It was a revelation—the love of dogs has the power to bring people together.
                </p>
                <p class="mt-5 text-xl text-gray-600 text-justify">
                Dogs bring so much joy into our lives, and they enrich our communities in ways we often overlook.
                 They help us forge connections, share smiles, and create bonds that last. In recognizing the incredible value dogs bring, Woof Spot was born.
                </p>
                <p class="mt-5 text-xl text-gray-600 text-justify">
                At Woof Spot, we believe that every dog is unique, with their own play styles, social needs, and personalities. Our mission is to connect dogs and their owners, fostering friendships that make life richer for everyone involved—both two-legged and four-legged. Whether it's finding a playmate for your energetic pup, or pal that matches your pup's playstyle, organizing a neighborhood dog walk,
                 or simply meeting other dog lovers in your area, Woof Spot is here to help you and your dog make the most of your community.
                </p>
                {/* <button className="btn text-white no-underline
                             bg-[#F88D58] hover:bg-black  my-2">
                                Get Started <MdOutlineArrowOutward /></button> */}
            </div>
        </div>
        <div class="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24  sm:px-6 lg:px-8">
            <div class="">
                <Image class="" src={dog2} alt="" />
            </div>
  
        </div>

    </div>
    <div>
        <title>How Do You Play?</title>
      <HowDoYouPlay />
    </div>
</section>

    );
};

export default Containt;