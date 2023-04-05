import React from 'react';
import img from "./../../assets/img/img.png"
const Busines = () => {
    return (
        <div className=" busines flex justify-between items-center">
<div>
    <h1>Virtual Reality <br/> Business Solutions</h1>
    <p>We have over 15 year exprience in business consultting arena. We have over  <br/>15 year exprience in business consultting arena and artficial intelligence.</p>
    <div className="flex items-center justify-around mt-10">
        <button type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join Us
        </button>
        <button type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Watch video
        </button>

    </div>
</div>
            <img src={img} alt="img"/>
           <span ></span>
            </div>
    );
};

export default Busines;