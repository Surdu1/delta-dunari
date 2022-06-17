import React from "react";

function Strabate({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Ce strabate Dunarea?</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Ce strabate Dunarea?</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> Dunarea, traverseaza si in acelasi timp uneste, 4 capitale - Viena, Bratislava, Budapesta, Belgrad si 10 state europene: Germania, Austria, Slovacia, Ungaria, Croatia, Iugoslavia, Romania, Bulgaria, Republica Moldova si Ucraina.</span>
         </div>
        </div>
    )
}

export default Strabate;