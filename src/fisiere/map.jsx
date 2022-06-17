import React from "react";


function Map({menu, setMenu}){
    return(
        <div className="pag1">
         <div className="had">
             <h1  id="nodeTitle">MAPA FLUVIU DUNAREA</h1>
             <div className="had_buton">
             <span onClick={()=>{setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</span>
             </div>
         </div>
         <div className="sub-pag1">
             <span className="iDeviceTitle">MAPA FLUVIU DUNAREA</span>
         </div>
         <div className="content" style={{ width: '100%', height: '70vh' }}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718716.9479352939!2d28.615289759296765!3d45.27835809078909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b9c353489712f1%3A0xebbd01956395baca!2sDelta%20Dun%C4%83rii!5e0!3m2!1sro!2sro!4v1646467086947!5m2!1sro!2sro" allowFullScreen="" loading="lazy"></iframe>
         </div>
        </div>
    )
}

export default Map;