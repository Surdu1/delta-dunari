import React from "react";

function Fluviu({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">FLUVIUL DUNĂREA</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">FLUVIUL DUNĂREA</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> Lungimea cursului de apă: 2 888 Km</span>
             <span><i className='bx bx-world'></i> Fluviul care străbate Europa de la Vest la EST</span>
             <span><i className='bx bx-world'></i> Zonă de izvorâre: Munţii Pădurea Neagră, Germania</span>
             <span><i className='bx bx-world'></i> Punct de vărsare : Sulina</span>
             <span><i className='bx bx-world'></i> Emisar: Marea Neagră</span>
             <span><i className='bx bx-world'></i> La vărsare s-a format Delta Dunării</span>
         </div>
        </div>
    )
}

export default Fluviu;