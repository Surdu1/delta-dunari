import React from "react";

function Etimologie({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">ETIMOLOGIE</h1>
             <div  onClick={()=>{setMenu(!menu)}} className="had_buton">
             <i className='bx bx-menu'>Menu</i>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">ETIMOLOGIE</span>
         </div>
         <div className="content">
             <br></br>
             <span>Dunărea avea mai multe nume:</span>
             <br></br>
             <br></br>
             <span><i className='bx bx-world'></i> Donau în limba germană,</span>
             <span><i className='bx bx-world'></i> Dunaj în limba slovacă,</span>
             <span><i className='bx bx-world'></i> Duna în limba maghiară,</span>
             <span><i className='bx bx-world'></i> Dunav în limba sârbocroată,</span>
             <span><i className='bx bx-world'></i> Дунав/Dunav; Дунав în limba bulgară,</span>
             <span><i className='bx bx-world'></i> Дунай (Dunai) în limba ucraineană,</span>
             <span><i className='bx bx-world'></i> Danube în limba engleză şi limba franceză şi</span>
             <span><i className='bx bx-world'></i> Tuna în limba turcă.</span>
             <br></br>
             <span>Încă din antichitate, Dunărea avea mai multe nume:</span>
             <br></br>
             <span><i className='bx bx-world'></i> Istros / Istru / Hister / Danaistru, pentru sectorul inferior, în scrierile greceşti</span>
             <span><i className='bx bx-world'></i> Danubius în cele latino-romane (Zeul fluviilor)</span>
         </div>
        </div>
    )
}

export default Etimologie;