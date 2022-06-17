import React from "react";

function Dunarea({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">DUNĂREA ÎN ROMÂNIA</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">DUNĂREA ÎN ROMÂNIA</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> Cel mai lung fluviu din România</span>
             <span><i className='bx bx-world'></i> Cursul inferior se desfăşoară pe o distanţă de 1.075 km. între localităţile Baziaş şi Sulina;</span>
             <span><i className='bx bx-world'></i> Colectează majoritatea râurilor din România cu excepţia celor din Dobrogea;</span>
             <span><i className='bx bx-world'></i> Prezintă importanţă deosebită pentru: navigaţie, hidrocentrală, piscicultură, furnizând apă pentru industrie, agricultură, populaţie</span>
             <span><i className='bx bx-world'></i> În Lunca Dunării se află multe aşezări printre care 18 oraşe, inclusiv municipiul   Brăila</span>
             <span><i className='bx bx-world'></i> Colectează majoritatea râurilor din România cu excepţia celor din Dobrogea;</span>
         </div>
        </div>
    )
}

export default Dunarea;