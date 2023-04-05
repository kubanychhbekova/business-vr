import React from 'react';
import img from "./../../assets/img/photo.png"
import {AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"
import {BsTelegram ,BsFacebook}from "react-icons/bs"
const Team = () => {
    return (
        <div className=" team flex flex-col items-center">
        <h1>Met Our Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
            <div className="flex  justify-between">
                <div className="team--card team1">
                    <img src={img} alt=""/>
                    <span></span>
                    <h2>Sunny Khan</h2>
                    <h3>Executive officer</h3>
                    <div className="flex justify-between">
                        <AiFillTwitterCircle className='icon'/>
                        <BsFacebook className='icon'/>
                        <BsTelegram className='icon'/>
                        <AiFillInstagram className='icon'/>
                    </div>
                </div>
                <div className="team--card">
                    <img src={img} alt=""/>
                    <h2>Sunny Khan</h2>
                    <h3>Executive officer</h3>
                    <div className="flex justify-between">
                        <AiFillTwitterCircle className='icon'/>
                        <BsFacebook className='icon'/>
                        <BsTelegram className='icon'/>
                        <AiFillInstagram className='icon'/>
                    </div>
                </div>
                <div className="team--card team3">
                    <img src={img} alt=""/>
                    <span></span>
                    <h2>Sunny Khan</h2>
                    <h3>Executive officer</h3>
                    <div className="flex justify-between">
                        <AiFillTwitterCircle className='icon'/>
                        <BsFacebook className='icon'/>
                        <BsTelegram className='icon'/>
                        <AiFillInstagram className='icon'/>
                    </div>
                </div>
                <div className="team--card">
                    <img src={img} alt=""/>
                    <h2>Sunny Khan</h2>
                    <h3>Executive officer</h3>
                    <div className="flex justify-between">
                        <AiFillTwitterCircle className='icon'/>
                        <BsFacebook className='icon'/>
                        <BsTelegram className='icon'/>
                        <AiFillInstagram className='icon'/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;