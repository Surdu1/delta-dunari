import React from "react";

function Inceput({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Dunarea la inceputul drumului</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Dunarea la inceputul drumului</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> Dunarea, al doilea fluviu ca marime din Europa, dupa Volga, izvoraste de sub varful Kandel (1241 m), din Muntii Padurea Neagra, Germania. In localitatea Donaueschingen, cele doua paraiase Brigach si Breg isi amesteca apele in parcul castelului Fürstenberg, pornind catre est, intr-o lunga si aventuroasa calatorie, de aproximativ 2860 km catre Marea Neagra.</span>
             <span><i className='bx bx-world'></i> La punctul de izvor al fluviului, se afla un complex statuar, reprezentand doua femei, o mama, simbolizand Europa, ce ii arata fiicei sale , Dunarea calea pe care trebuie s-o urmeze .</span>
         </div>
        </div>
    )
}

export default Inceput;