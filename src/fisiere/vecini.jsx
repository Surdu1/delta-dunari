import React from "react";

function Vecini({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Vecini</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Vecini</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> Germania malul drept 658,6 km malul stâng 687,0 km</span>
             <span><i className='bx bx-world'></i> Austria malul drept 357,5 km malul stâng 321,5 km</span>
             <span><i className='bx bx-world'></i> Slovacia malul drept 22,5 km malul stâng 172,1 km</span>
             <span><i className='bx bx-world'></i> Ungaria malul drept 471,2 km malul stâng 275,2 km</span>
             <span><i className='bx bx-world'></i> Croaţia malul drept 137,5 kma</span>
             <span><i className='bx bx-world'></i> Serbia malul drept 449,9 km malul stâng 358,0 km</span>
             <span><i className='bx bx-world'></i> Bulgaria malul drept 471,6 km</span>
             <span><i className='bx bx-world'></i> România malul drept 374,1 km malul stâng 940,9 km</span>
             <span><i className='bx bx-world'></i> Republica Moldova malul stâng 0,6 km</span>
             <span><i className='bx bx-world'></i> Ucraina malul stâng 79,6 km</span>
         </div>
        </div>
    )
}

export default Vecini;