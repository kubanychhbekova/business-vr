import React from 'react';
import img from "./../../assets/img/Group.png"
import {BsGeoAlt, BsTelephone, BsEnvelopePaper, BsInstagram, BsPinterest, BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {
    return (
        <div className="footer text-white ">
            <div className="footer--top   flex justify-between">
                <div className="flex flex-col">
                    <div className="flex">
                        <img src={img} alt="img " className="mx-2"/>
                        <h2> Zone.</h2>
                    </div>
                    <a href="#"className="flex items-center"><BsGeoAlt className="mx-2"/> Dhaka, Bangladesh</a>
                    <a href="#"className="flex items-center"><BsTelephone className="mx-2"/> 0943833399</a>
                    <a href="#"className="flex items-center"><BsEnvelopePaper className="mx-2"/> support@zone.com</a>
                    <p className="flex items-center"><BsFacebook className="mx-2 cursor-pointer"/> <AiFillTwitterCircle className="cursor-pointer"/><BsInstagram
                        className="mx-2 cursor-pointer"/><BsPinterest className="cursor-pointer"/></p>

                </div>
                <div className="flex flex-col justify-around">
                    <h6>Service</h6>
                    <a href="#"> OrderManagement</a>
                    <a href="#">Social Assistant</a>
                    <a href="#"> Crypto Platform</a>
                    <a href="#"> Analyzer of the News </a>
                </div>
                <div className="flex flex-col justify-around">
                    <h6> Company</h6>
                    <a href="#"> About Us</a>
                    <a href="#"> News </a>
                    <a href="#"> Our trusted partner </a>
                    <a href="#">New users FAQ</a>
                </div>
                <div className="flex flex-col justify-around">
                    <h6> Supports</h6>
                    <a href="#">Help center </a>
                    <a href="#"> Feedbcak</a>
                    <a href="#"> Contact us </a>
                    <a href="#">Terms conditins</a>
                </div>
                <div className="flex flex-col justify-around">
                    <h6> Resources</h6>
                    <a href="#">  Download app</a>
                    <a href="#">Blog</a>
                    <a href="#">What’s new  </a>
                    <a href="#">Sitemap</a>
                </div>

            </div>
                    <span className="span"></span>
                <div className=" footer-bottom flex justify-between">
                    <p>© 2021 Zone. - All rights reserved.</p>
                    <div className="flex ">
                        <a href="#">Privacy</a>
                        <a href="#" className="px-4">Security</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>

    );
};

export default Footer;