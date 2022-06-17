import React from "react";

function Poarta({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Dunărea - poartă către Europa</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Dunărea - poartă către Europa</span>
         </div>
         <div className="content">
             <span><i className='bx bx-world'></i> Frumuseţea şi caracterul maiestuos al Dunării au constituit frecvent surse de inspiraţie pentru poeţi, pictori, muzicieni şi alţi oameni de cultură. Cea mai cunoscută creaţie culturală dedicată fluviului este “Dunărea albastră” (An der schönen blauen Donau, în original), un vals vienez creat de Johann Strauss Tânărul (sau “al II-lea”) în 1866 care a devenit un imn neoficial al Vienei Imperiale. Altă piesă extrem de cunoscută dedicată fluviului este “Valurile Dunării”, un vals compus de Ion Ivanovici, un compozitor român, în anul 1889.</span>
         </div>
        </div>
    )
}

export default Poarta;