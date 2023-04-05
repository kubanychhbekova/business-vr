import React from 'react';
import img from"./../../assets/img/icon1.png"
import img2 from "./../../assets/img/Icon.png"
import img3 from "./../../assets/img/Icon (1).png"
import img4 from "./../../assets/img/Icon (2).png"
import img5 from "./../../assets/img/Icon (3).png"
import img6 from "./../../assets/img/Icon (4).png"
const Service = () => {
    return (
        <div className=" service flex flex-col justify-center items-center">
            <h1 className="text-white  ">Our Service </h1>
            <p>We turn information into actionable insights We work to understand your issues <br/>
                and are driven to ask better questions in the pursuit of making work.</p>
            <div className=" flex  flex-wrap justify-between  items-center">
               <div className="card card1   flex flex-col  items-center ">
                   <span></span>
                   <img src={img} alt="" />
                   <h2>Order Management</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                   <div>
                       <p>Learn more</p>
                   </div>
               </div>
                <div className="card card2   flex flex-col  items-center">
                    <span></span>
                    <img src={img2} alt="" />
                    <h2>Order Management</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                    <div>
                        <p>Learn more</p>
                    </div>
                </div>
                <div className="card card3   flex flex-col  items-center">
                    <span></span>
                    <img src={img3} alt="" />
                    <h2>Order Management</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                    <div>
                        <p>Learn more</p>
                    </div>
                </div>
                <div className=" card card4  flex flex-col  items-center">
                    <span></span>
                    <img src={img4} alt="" />
                    <h2>Order Management</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                    <div>
                        <p>Learn more</p>
                    </div>
                </div>
                <div className="card  card5 flex flex-col  items-center">
                    <span></span>
                    <img src={img5} alt="" />
                    <h2>Order Management</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                    <div>
                        <p>Learn more</p>
                    </div>
                </div>
                <div className="card card6   flex flex-col  items-center">
                    <span></span>
                    <img src={img6} alt="" />
                    <h2>Order Management</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/> Ut ut felis congue nisl hendrerit commodo.</p>
                    <div>
                        <p>Learn more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;