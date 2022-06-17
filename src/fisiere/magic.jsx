import React from "react";

function Magic({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Delta Dunarii- un loc magic</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Delta Dunarii- un loc magic</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> Delta Dunarii este limitata la sud-vest de podisul Dobrogei, la nord formeaza granita cu Ucraina, iar in est se varsa in Marea Neagra.Delta Dunarii esti traversata de paralela 45° latitudine N si meridianul de 29°longitudine E.</span>
             <br/>
             <span><i className='bx bx-world'></i> Delta Dunarii(3446 km²), aflata in mare parte in Dobrogea, Romania, si partial in Ucraina, este cea mai mare si cea mai bine conservata dintre deltele europene</span>
         </div>
        </div>
    )
}

export default Magic;