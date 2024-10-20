"use client"
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import Image from "next/image";
import logo from "../../asserts/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const menuItems = [
    { name: 'Home',path:'/' },
    { name: 'Friends', path:'friends'},
    { name: 'Woof Mail',path:'/'  },
    { name: 'Fetch-Worthy Finds',path:'/' },
    { name: 'Featured Pups',path:'/' },
    { name: 'Our Pack',path:'/' },
    { name: 'Contact us',path:'/' },
    { name: 'Dashboard',path:'/' },
  ];
  console.log(isOpen);
  



  return (
        // Navbar items Section
  <nav className="bg-white p-4 pb-3 shadow-md">
    <div className="container mx-auto flex justify-between lg:flex-row flex-row-reverse">


    {/* <div className='sideCart  flex  absolute -top-6 right-0  p-1  z-10 bg-transparent '> */}

          <div className='lg:hidden block text-right relative '>
            <button
                      onClick={()=>setIsOpen(!isOpen)}
                      className="inline-flex items-center justify-center p-2 
                      rounded-md text-gray-400 hover:text-white hover:bg-gray-700 
                      focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out "
                      aria-label="Toggle menu"
                    >
                      {/* fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 */}
                        <FaBars />
                    </button>
                    {
                      isOpen && <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right min-w-52 shadow-2xl rounded-2xl absolute  right-0  p-1  bg-white z-20  ">
                      <div className="relative mb-12">
                      <button onClick={()=>setIsOpen(!isOpen)}>x</button>
                      <IoPersonCircleOutline className="text-5xl text-right right-0 absolute "/>
                      </div>
                     
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={`${item?.path}`}
                          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                          aria-label={item.name}
                        >
                          <span className="  text-black text-right">
                            {/* {item.icon} */}
                            <span className="">{item.name}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    }
                     
                      
            </div>

            <Link href="/">
               <div className="flex justify-center items-center ">
        <Image
        alt="pic"
        src={logo}
    width={60}
        />
        {/* Pc menu */}
       </div></Link>
              <div className="hidden lg:block">
              <ul className="flex space-x-6 text-black lg:text-sm  font-bold uppercase ">
                    {
                        menuItems.map(item=>(
                            <Link href={item?.path} key={item.name} className="">
                              <li className="flex ">{item.name} 
                              </li>
                            </Link>
                        ))
                    }
                </ul>

              </div>



         {/* <!-- Profile --> */}
       <div className="relative lg:block hidden">
       <IoPersonCircleOutline className="text-5xl"/>
       </div>

    </div>
  </nav>

  );
};

export default Navbar;