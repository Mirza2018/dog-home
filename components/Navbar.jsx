"use client"
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import Image from "next/image";
import logo from "../asserts/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const menuItems = [
    { name: 'Home' },
    { name: 'Friends'},
    { name: 'Products List' },
    { name: 'Featured Pups'},
    { name: 'Our Pack'},
    { name: 'Contact Us'},
    { name: 'Chat'},
    { name: 'Dashboard'},
  ];



  return (
        // Navbar items Section
  <nav className="bg-white p-4 pb-3 shadow-md">
    <div className="container mx-auto flex justify-between  items-center">



    <div className="lg:hidden">
              <button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                      aria-label="Toggle menu"
                    >
                      {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                      {
                        isOpen && <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                                    {menuItems.map((item) => (
                                      <a
                                        key={item.name}
                                        href={`${item.name}`}
                                        className="block px-3 py-2 rounded-md text-base font-medium uppercase text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                                        aria-label={item.name}
                                      >
                                        <span className="flex items-center">
                                          {item.icon}
                                          <span className="">{item.name}</span>
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                      }
                    
              </div>



               <div className="relative ">
        <Image
        alt="pic"
        src={logo}
    width={60}
        />
        {/* Pc menu */}
       </div>
              <div className="hidden lg:block">
              <ul className="flex space-x-6 text-black lg:text-base md:text-sm  font-bold uppercase ">
                    {
                        menuItems.map(item=>(
                            <Link href='/' key={item.name} className="">
                              <li className="flex ">{item.name} 
                              </li>
                            </Link>
                        ))
                    }
                </ul>

              </div>



         {/* <!-- Profile --> */}
       <div className="relative ">
       <IoPersonCircleOutline className="text-5xl"/>
       </div>

    </div>
  </nav>

  );
};

export default Navbar;