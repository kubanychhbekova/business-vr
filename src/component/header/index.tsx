import React from 'react';
import img from "./../../assets/img/Group.png"
const Index = () => {
    return (


<div className="index  ">
                    <nav>

                            <div className=" flex flex-wrap items-center justify-between p-4">
                                    <a href="https://flowbite.com/" className="flex items-center">
                                            <img src={img} className="h-8 mr-3"
                                                 alt=" Logo"/>
                                            <span
                                                className="self-center text-2xl font-semibold whitespace-nowrap text-white">Zone</span>
                                    </a>

                                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                                                    <li>
                                                            <a href="#"
                                                               className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 text-white text-blue-500"
                                                               aria-current="page">Home</a>
                                                    </li>
                                                    <li>
                                                            <a href="#"
                                                               className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
                                                    </li>
                                                    <li>
                                                            <a href="#"
                                                               className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                                    </li>
                                                    <li>
                                                            <a href="#"
                                                               className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Services</a>
                                                    </li>
                                                    <li>
                                                            <a href="#"
                                                               className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> Blog</a>
                                                    </li>
                                                    <button type="button"
                                                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact Us
                                                    </button>

                                            </ul>
                                    </div>
                            </div>

                    </nav>

</div>

            );


};

export default Index;