import React,{useState,useEffect} from "react";
function Quiz({menu, setMenu}){
    const [extins,setExtins] = useState(false);
    const [terminat,setTerminat] = useState(false);
    const [play,setPaly] = useState(false);
    const [raspunsuri_corecte, setRaspunsuri_corecte] = useState(0);
    const [raspunsuri_gresite, setRaspunsuri_gresite] = useState(0);
    const [full_size, setFull_size] = useState(false);
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [val3, setVal3] = useState('');
    const [val4, setVal4] = useState('');
    const [select1,setSelect1] = useState(false);
    const [select2,setSelect2] = useState(false);
    const [select3,setSelect3] = useState(false);
    const [select4,setSelect4] = useState(false);
    
    const [g1,setg1] = useState(false);
    const [g2,setg2] = useState(false);
    const [g3,setg3] = useState(false);
    const [g4,setg4] = useState(false);

    const [gL1,setgL1] = useState(false);
    const [gL2,setgL2] = useState(false);
    const [gL3,setgL3] = useState(false);
    const [gL4,setgL4] = useState(false);


    var intrebari = ['Cate state europene strabate Dunarea?','De unde izvoraste fluviul Dunarea?','Punct de vărsare:','Care este lungimea cursului de apă al fluviului Dunarea?','Dunărea avea mai multe nume:'];
    var raspuns_1 = ['10 state','Muntii Padurea Neagra','Sulina','aproximativ 2800 km','Donau în limba germană'];
    var raspuns_2 = ['9 state','Muntii Carpati','Braila','aproximativ 3000 km','Dunav în limba sârbocroată'];
    var raspuns_3 = ['8 state','Muntii Himalaya','Bucuresti','aproximativ 3200 km','Tuna în limba turcă'];
    var raspuns_4 = ['11 state','Muntii Anzi','Tulcea','aproximativ 2600 km','Danube în limba engleză'];
    var raspunsur_corecte = [[true,false,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[true,true,true,true]];
    const [index, setIndex] = useState(intrebari.length - 1);
    
    function afisare(){
        if(raspunsur_corecte[index][0] == true){
            setg1(true);
        }
        else{
            setgL1(true);
        }
        if(raspunsur_corecte[index][1] == true){
            setg2(true);
        }
        else{
            setgL2(true);
        }
        if(raspunsur_corecte[index][2] == true){
            setg3(true);
        }
        else{
            setgL3(true);
        }
        if(raspunsur_corecte[index][3] == true){
            setg4(true);
        }
        else{
            setgL4(true)
        }
        setTimeout(permutari,2000);
    }
    
    
    function permutari(){
        let sel_ras = [select1,select2,select3,select4];
        if(raspunsur_corecte[index].toString() == sel_ras.toString()){
            setRaspunsuri_corecte(raspunsuri_corecte + 1);
        }
        else{
            setRaspunsuri_gresite(raspunsuri_gresite + 1)
        }
        setIndex(index - 1);
        if(index == 0){
            setTerminat(true);
        }
        setSelect1(false)
        setSelect2(false)
        setSelect3(false)
        setSelect4(false)
        setg1(false);
        setg2(false);
        setg3(false);
        setg4(false);
        setgL1(false);
        setgL2(false);
        setgL3(false);
        setgL4(false);
    }
  
    useEffect(()=>{
        setVal1(raspuns_1[index]);
        setVal2(raspuns_2[index]);
        setVal3(raspuns_3[index]);
        setVal4(raspuns_4[index]);
    },[index])

        function getFullscreenElement(){
        return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement;
    }

    function reload(){
        setRaspunsuri_corecte(0);
        setRaspunsuri_gresite(0);
        setTerminat(!terminat);
        setIndex(intrebari.length - 1);
    }

    function toggleFullscreen(){
        if(getFullscreenElement()){
            document.exitFullscreen();
            setFull_size(false);
        }
        else{
            document.getElementById('content').requestFullscreen().catch(console.log);
            setFull_size(true);
        }
    }
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Test Fluviul Dunarea</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">Test Fluviul Dunarea</span>
         </div>
         <div className="content" id="content">
             <p>Alege raspunsul corect!</p>
             {extins? <div className="mesaj_extins">
                <img src="seleccionaIcon.png"></img>
                <p onClick={()=>{setExtins(!extins)}}>Click here to play</p>
             </div>:
             <div className="joc_inplicit">
                   <div className="bar_menu">
                   <div className="rasp_dreapta">
                          <div className="raspunsuri_totale"><img src="exequextnumber.png"></img><p>{intrebari.length}</p></div>
                          <div className="raspunsuri_corecte"><img src="exequexthits.png"></img><p>{raspunsuri_corecte}</p></div>
                          <div className="raspunsuri_gresite"><img src="exequextrerrors.png"></img><p>{raspunsuri_gresite}</p></div>
                   </div>
                   <div className="rasp_stanga">
                          <div onClick={()=>{toggleFullscreen()}} className="size"><img  src={full_size? "exequextnormal.png": "exequextfull.png"}></img></div>
                          <div onClick={()=>{setExtins(!extins)}} className="size"><img src="exequextmin.png"></img></div>
                   </div>
             </div>
        
                 {terminat? <div className="afisare_score">
                     <div className="score">
                        <img src="exequextwon.png"></img>
                        <div className="score_txt">
                            <p>Score: {raspunsuri_corecte * 10}:00</p>
                            <p>Hits: {raspunsuri_corecte}</p>
                            <p>Error: {raspunsuri_gresite}</p>
                        </div>
                     </div>
                     <div className="incurajare">
                     Cool! Questions completed!
                     </div>
                     <div onClick={()=>{reload()}} className="reload">
                         Click here for a new game
                     </div>
                 </div>:
                  <div className="joc">
                      <img src="seleccionaHome.png"></img>
                     {play? <div className="quiz_game">
                         <div className="quiz">
                         <div className="text_g">{intrebari[index]}</div>
                         <div className="joc_g">
                                <div className="sectiune">
                                <div onClick={()=>{setSelect1(!select1)}} className={select1? "select-r1 r1": "r1"} id={g1? 'corect': gL1?'gresit':''}>{val1}</div>
                                <div onClick={()=>{setSelect2(!select2)}}  className={select2? "select-r2 r2": "r2"} id={g2? 'corect': gL2?'gresit':''}>{val2}</div>
                                </div>
                                <div className="sectiune">
                                <div onClick={()=>{setSelect3(!select3)}}  className={select3? "select-r3 r3": "r3"} id={g3? 'corect': gL3?'gresit':''}>{val3}</div>
                                <div onClick={()=>{setSelect4(!select4)}}  className={select4? "select-r4 r4": "r4"} id={g4? 'corect': gL4?'gresit':''}>{val4}</div>
                                </div>
                       </div>
                       </div>
                      <div className="select_buton"><div className={select1? 'cud_1': ''}></div><div className={select2? 'cud_2': ''}></div><div className={select3? 'cud_3': ''}></div><div className={select4? 'cud_4': ''}></div><button onClick={()=>{afisare()}}>Selelct</button></div>
                     </div>:<div onClick={()=>{setPaly(true)}} className="play_mesaj">
                      Click here to start
                     </div>
                     }
                  </div>
                  }
             </div>
             }
         </div>
        </div>
    )
}

export default Quiz;