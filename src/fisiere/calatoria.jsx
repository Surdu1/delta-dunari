import React,{useState} from "react";

function Calatorie({menu, setMenu}){
 
    const[activat,SetActivat] = useState(false)

    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">Fluviul Dunărea, călătoria de la izvor la vărsare. - video</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <br></br>
         <div className="sub-pag1 content" id="cont">
             <span className="iDeviceTitle">Fluviul Dunărea, călătoria de la izvor la vărsare.</span>
             <button onClick={()=>{SetActivat(!activat)}} style={{fontSize: 30, border: 'none',boxShadow: "5px 10px #888888;", background: "rgba(0,0,0,0.2)",borderRadius: 30,outline: 'none',background: 'rgba(255, 255, 255, 0.2)',borderRadius: '16px',
boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
backdropFilter: 'blur(5px)',
WebKitBackdropFilter: 'blur(5px)',
border: '1px solid rgba(255, 255, 255, 0.3)',
            }}><i className={activat? 'bx bx-chevron-up' : 'bx bx-chevron-down'}></i></button>
         </div>
         <br></br>
         <div className={activat? "content" : 'nup'}>
         <iframe width="100%" height="350" src="https://www.youtube.com/embed/dXDrS1Sg5Jo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         </div>
         <br></br>
        </div>
    )
}

export default Calatorie;