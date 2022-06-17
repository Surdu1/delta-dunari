import React from "react";

function Poze({menu, setMenu}){

    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Poze cu fluviul Dunarea de-a lungul intregii calatorii</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Poze cu fluviul Dunarea de-a lungul intregii calatorii</span>
         </div>
         <div className="content" >
             <div className="img_primar">
             <img src="dunarea_in_europa.jpg" alt="Dunarea In Europa" title="Dunarea In Europa"></img>
             <img src="Locul_unde_riurile_Brigach_(stinga)_si_Breg_(dreapta)_se_reunesc,_ducind_la_formarea_Dunarii.jpg" alt="Locul unde riurile Brigach (stinga) si Breg (dreapta) se reunesc, ducind la formarea Dunarii" title="Locul unde riurile Brigach (stinga) si Breg (dreapta) se reunesc, ducind la formarea Dunarii"></img>
             <img src="Donaueschingen_(Germania),_unde_avem_doar_Dunarea.jpg" alt="Donaueschingen (Germania), unde avem doar Dunarea" title="Donaueschingen (Germania), unde avem doar Dunarea"></img>
             <img src="Dunarea_la_Ulm.jpg" alt="Dunarea la Ulm" title="Dunarea la Ulm"></img>
             <img src="Dunarea_la_Ingolstadt.jpg" alt="Dunarea la Ingolstadt" title="Dunarea la Ingolstadt"></img>
             <img src="In_trecere_prin_Regensburg.jpg" alt="In trecere prin Regensburg" title="In trecere prin Regensburg"></img>
             <img src="Dunarea_la_Passau.jpg" alt="Dunarea la Passau" title="Dunarea la Passau"></img>
             <img src="Austria,_Linz.jpg" alt="Austria, Linz" title="Austria, Linz"></img>
             <img src="In_trecere_prin_Krems.jpg" alt="In trecere prin Krems." title="In trecere prin Krems."></img>
             <img src="Dunarea_la_portile_Vienei.jpg" alt="Dunarea la portile Vienei" title="Dunarea la portile Vienei"></img>
             <img src="Pasaj_nocturn_al_Dunarii_prin_alta_capitala__Bratislava.jpg" alt="Pasaj nocturn al Dunarii prin alta capitala – Bratislava" title="Pasaj nocturn al Dunarii prin alta capitala – Bratislava"></img>
             <img src="Si_inca_o_capitala_in_drumul_Dunarii_-_Budapesta.jpg" alt="Si inca o capitala in drumul Dunarii - Budapesta" title="Si inca o capitala in drumul Dunarii - Budapesta"></img>
             <img src="Dunarea_pe_teritoriul_Croatiei,_la_Vukovar.jpg" alt="Dunarea pe teritoriul Croatiei, la Vukovar" title="Dunarea pe teritoriul Croatiei, la Vukovar"></img>
             <img src="_Galati_(Romania),_ultima_,,_suta_de_metri__pe_curs_drept_a_calatoriei_Dunarii_spre_Marea_Neagra.jpg" alt="La Galati (Romania)" title="La Galati (Romania)"></img>
             <img src="padurea_Letea.jpg" alt="padurea Letea." title="padurea Letea."></img>
             <img src="Delta_Dunarii.jpg" alt="Delta Dunarii" title="Delta Dunarii"></img>
             <img src="sulina.jpg" alt="sulina" title="sulina"></img>
             <img src="sf_gheorghe.jpg" alt="sf gheorghe" title="sf gheorghe" ></img>
             <img src="km_0_al_dunarii.jpg" alt="km 0 al dunarii" title="km 0 al dunarii" ></img>
         </div>
         </div>
        </div>
    )
}

export default Poze;