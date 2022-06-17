import React,{useState} from "react";
function Home({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Home</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Dunarea in Europa</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> propunator: Coordonator științific, Conf. univ. dr. Dragoș Sebastian Cristea Absolvent, Andrei-Ionel Sava</span>
         </div>
        </div>
    )
}

export default Home;