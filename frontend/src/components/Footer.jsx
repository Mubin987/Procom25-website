import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='text-sm py-6 bg-[#161616] w-full text-white flex flex-col justify-between mt-auto'>
            <div className='px-8 pt-4'>
                <img src="/procom25logo.png" alt="PROCOM'25"
                    className=''
                    width={200}
                />
            </div>
            <div className='flex md:flex-row flex-col justify-between w-full'>
                <div className='w-full md:w-2/5 px-8 p-4 flex flex-col gap-4'>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci fuga omnis itaque? Impedit quisquam vel, repellat voluptatum exercitationem aliquam, sapiente corporis laborum porro ratione perferendis atque maiores nulla iure neque veritatis cupiditate perspiciatis asperiores et veniam, dolorum sequi eos? Ducimus!
                    </p>
                </div>
                <div className='w-full md:w-3/5 px-8 p-4 flex sm:flex-row gap-6 sm:gap-0  flex-col justify-between md:justify-evenly'>
                    <div>
                        <h3 className='font-extrabold text-md'>Categories</h3>
                        <ul className='mt-2 flex flex-col gap-1'>
                            <li>
                                <Link to={""}>Computer Science</Link>
                            </li>
                            <li>
                                <Link to={""}>Electrical Engineering</Link>
                            </li>
                            <li>
                                <Link to={""}>Robotics</Link>
                            </li>
                            <li>
                                <Link to={""}>General Fields</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-extrabold text-md'>Quick Links</h3>
                        <ul className='mt-2 flex flex-col gap-1'>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about-us"}>About Us</Link>
                            </li>
                            <li>
                                <Link to={"/register"}>Register</Link>
                            </li>
                            <li>
                                <Link to={"/modules"}>Modules</Link>
                            </li>
                            <li>
                                <Link to={"/sponsors"}>Sponsors</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-extrabold text-md'>Contact Us</h3>
                        <ul className='mt-2 flex flex-col gap-1'>
                            <li>
                                +92 345 6789012
                            </li>
                            <li>
                                FAST National University, Karachi
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-white'></div>
            <div className='flex flex-col gap-4  sm:flex-row  px-8 pt-4 sm:justify-between items-center'>
                <p className='text-[15px]'>
                    <span className='font-bold'>
                        Procom'25
                    </span> | All rights reserved</p>
                <div className='flex gap-4 text-2xl justify-center items-center'>
                    <Link>
                        <FaInstagram />
                    </Link>
                    <Link>
                        <FaLinkedinIn />
                    </Link>
                    <Link>
                        <FaFacebookF />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
