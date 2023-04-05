import React from 'react';
import img from "./../../assets/img/man.png"
import img2 from "./../../assets/img/man2.png"
const Project = () => {
    return (
       <div className="project">
           <div className="  flex justify-center items-center mb-10">
               <span></span>
               <img src={img} alt="img"/>
               <div>
                   <h1>We complete every projects <br/>
                       extra care as customer need</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/>eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini,<br/> error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                   <button type="button"
                           className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Read more
                   </button>

               </div>
           </div>
           <div className=" flex justify-center items-center">

               <div>
                   <h1>We complete every projects <br/>
                       extra care as customer need</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe <br/>scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore <br/>eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini,<br/> error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                   <button type="button"
                           className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Read more
                   </button>
               </div>
               <span></span>
               <img src={img2} alt="img"/>
           </div>
       </div>
    );
};

export default Project;