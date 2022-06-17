import React from "react";

function Romania({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Dunărea în România</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Dunărea în România</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> Curge între Baziaş şi Sulina pe o lungime de 1075 km (mai mult de jumătate din cursul navigabil)</span>
             <span><i className='bx bx-world'></i> Face graniţă pentru Serbia (Iugoslavia), Bulgaria, Moldova, Ucraina.</span>
             <span><i className='bx bx-world'></i> Curge numai pe teritoriul României (ambele maluri) între Călăraşi şi Galaţi.</span>
             <span><i className='bx bx-world'></i> Colectează majoritatea râurilor din România cu excepţia celor din Dobrogea.</span>
             <span><i className='bx bx-world'></i> Transportă anual cca 60 milioane tone aluviuni şi 200 miliarde m3 de apă.</span>
         </div>
        </div>
    )
}

export default Romania;