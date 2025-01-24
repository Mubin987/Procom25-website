import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='text-sm py-6 bg-[#161616] w-full text-white flex flex-col justify-between mt-auto'>
            <div className='px-8 pt-4'>
                <img src="/procom25logo.png" alt="PROCOM'25"
                    className='w-full max-w-[200px]'
                />
            </div>
            <div className='flex md:flex-row flex-col justify-between w-full'>
                <div className='w-full md:w-2/5 px-8 p-4 flex flex-col gap-4'>
                    <p className='text-justify'>
                        PROCOM, since 1998, is one of the most prestigiuos and long-standing events at FAST Karachi, acting as bridge between students and professional world by organising annual grand job fair, series of panel dicussions, competitions and a startup showcase.
                    </p>
                </div>
                <div className='w-full md:w-3/5 px-8 p-4 flex sm:flex-row gap-6 sm:gap-0  flex-col justify-between md:justify-evenly'>
                    <div>
                        <h3 className='font-extrabold text-md'>Categories</h3>
                        <ul className='mt-2 flex flex-col gap-1'>
                            <li>
                                <Link to={"/modules"}>Computer Science</Link>
                            </li>
                            <li>
                                <Link to={"/modules"}>Electrical Engineering</Link>
                            </li>
                            <li>
                                <Link to={"/modules"}>Business</Link>
                            </li>
                            <li>
                                <Link to={"/modules"}>Artifical Intelligence</Link>
                            </li>
                            <li>
                                <Link to={"/modules"}>General</Link>
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
                            Parshant, Participant Relations +92&nbsp;332&nbsp;2598600
                            </li>
                            <li>
                            Abdullah, Participant Relations +92&nbsp;334&nbsp;2945871
                            </li>
                            <li>
                            Sareem, Director Marketing +92&nbsp;315&nbsp;2098191
                            </li>
                            <li>
                            Mubin, Director Computing +92&nbsp;335&nbsp;2958201
                            </li>
                            <br />
                            
                            <li>
                                FAST National University, Karachi
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='border-t-2 border-white'></div> */}
            <div className='flex flex-col gap-4  sm:flex-row  px-8 pt-4 sm:justify-between items-center'>
                <p className='text-[15px]'>
                    <span className='font-bold font-lemonmilk'>
                        Procom'25
                    </span> | All rights reserved</p>
                <div className='flex gap-4 text-2xl justify-center items-center'>
                    <Link to="https://www.instagram.com/procom_fast/" target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link to="https://www.linkedin.com/company/procom-fast/" target="_blank">
                        <FaLinkedinIn />
                    </Link>
                    <Link to="https://web.facebook.com/procom.fast" target="_blank">
                        <FaFacebookF />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
