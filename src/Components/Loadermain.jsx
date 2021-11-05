import React from "react"
import logo from '../scss/assets/img/monjelati_logo.png';
import kid from '../scss/assets/img/icecreamloading1.gif';



const LoaderMain = () => {
 return (
  <div className= 'load'>
   <div  className="load__outer">
   <img src={logo}/>
   </div>
   <div className="load__inner">
   <img  src={kid}/>
  </div>
  </div>
 )}

export default LoaderMain;