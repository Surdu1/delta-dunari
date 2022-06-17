import React,{useState,useEffect} from "react";
import Calatorie from "./calatoria";
import Dunarea from "./dunarea";
import Etimologie from "./etimologie";
import Fluviu from "./fluviu";
import Home from './Home'
import Inceput from "./inceput";
import Magic from "./magic";
import Map from "./map";
import './page.css';
import Poarta from "./poarta";
import Poze from "./poze";
import Quiz from "./quiz";
import Romania from "./Romaina";
import Strabate from "./stabate";
import Vecini from "./vecini";
import data from './data.json';
function Page(){

const [pagina,setPagina] = useState(0);
const [menu, setMenu] = useState(true);
const [set,setSet] = useState(false);
const [filteredData, setFilteredData] = useState([]);

var next = <button className="buton" onClick={()=>{setPagina(pagina+1)}}>Next</button>;
var previos = <button className="buton" onClick={()=>{setPagina(pagina-1)}}>Previos</button>;

function tastare(value){
if(value == ''){
  setSet(false)
}
else{
  setSet(true)
  const searchWord = value;
  const newFilter = data.filter((value)=>{
    return value.select.toLowerCase().includes(searchWord.toLowerCase());
  })
  setFilteredData(newFilter);
}
}

useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 40 && pagina < 12) {
        setPagina(pagina + 1);
      } 
      if (e.keyCode === 38 && pagina > 0) {
        setPagina(pagina - 1);
      } 
    }
  
    window.document.addEventListener('keyup', handleKeyUp);
  
    return () => {
      window.document.removeEventListener('keyup', handleKeyUp);
    }
  }, [pagina]);

return(
    <div className="Home">
        <header>
           <div className="headerContent">
               Dunarea
            </div>
            <nav className="nav_sus">
            {pagina > 0? previos : ''}
            {pagina < 12? next : ''}
            </nav>
        </header>
        <div className="main-wrapper" id="selector">
        <div  className = "meniu_text" onClick={() => {setMenu(!menu)}}><i className='bx bx-menu'></i>Menu</div>
            <div className={menu? 'siteNav': "dispare"}>
            <div  className="input_main" ><input placeholder="Cauta pagina " onChange={(e) => {tastare(e.target.value)}}/></div>
              {set?
              <div>
              {filteredData.map((value,key) =>{
                return(
                  <div key={key} className = {(pagina == value.id)? "active meniu" : "meniu"} onClick={() => {setPagina(value.id)}}>{value.select}</div>
                )
              })}
              </div>:
              <div>
                              <div  className = {(pagina == 0)? "active meniu" : "meniu"} onClick={() => {setPagina(0)}}>Home</div>
                              <div  className = {(pagina == 1)? "active meniu" : "meniu"} onClick={() => {setPagina(1)}}>Dunarea la inceputul drumului</div>
                              <div  className = {(pagina == 2)? "active meniu" : "meniu"} onClick={() => {setPagina(2)}}>Dunărea - poartă către Europa</div>
                              <div  className = {(pagina == 3)? "active meniu" : "meniu"} onClick={() => {setPagina(3)}}>Ce strabate Dunarea?</div>
                              <div  className = {(pagina == 4)? "active meniu" : "meniu"} onClick={() => {setPagina(4)}}>FLUVIUL DUNĂREA </div>
                              {((pagina == 4) || (pagina == 13))? <div  className = {(pagina == 13)? "active meniu" : "meniu"} onClick={() => {setPagina(13)}}>...Vecini</div>: ''} 
                              <div  className = {(pagina == 5)? "active meniu" : "meniu"} onClick={() => {setPagina(5)}}>Dunărea în România</div>
                              <div  className = {(pagina == 6)? "active meniu" : "meniu"} onClick={() => {setPagina(6)}}>ETIMOLOGIE</div>
                              <div  className = {(pagina == 7)? "active meniu" : "meniu"} onClick={() => {setPagina(7)}}>DUNĂREA ÎN ROMÂNIA</div>
                              <div  className = {(pagina == 8)? "active meniu" : "meniu"} onClick={() => {setPagina(8)}}>Delta Dunarii- un loc magic</div>
                              <div  className = {(pagina == 9)? "active meniu" : "meniu"} onClick={() => {setPagina(9)}}>Fluviul Dunărea, călătoria de la izvor la vărsare. - video</div>
                              <div  className = {(pagina == 10)? "active meniu":"meniu"} onClick={() => {setPagina(10)}}>Test Fluviul Dunarea</div>
                              <div  className = {(pagina == 11)? "active meniu":"meniu"} onClick={() => {setPagina(11)}}>Poze cu fluviul Dunarea de-a lungul intregii calatorii</div>
                              <div  className = {(pagina == 12)? "active meniu":"meniu"} onClick={() => {setPagina(12)}}>Mapa Deleta Dunari</div>
                </div>
              }

            </div>
           
               <div className="payload">
               {(pagina == 0)? <Home setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 1)? <Inceput setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 2)? <Poarta setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 3)? <Strabate setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 4)? <Fluviu setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 5)? <Romania setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 6)? <Etimologie setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 7)? <Dunarea setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 8)? <Magic setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 9)? <Calatorie setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 10)? <Quiz setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 11)? <Poze setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 13)? <Vecini setMenu={setMenu} menu={menu}/>: ''}
               {(pagina == 12)? <Map setMenu={setMenu} menu={menu}/>: ''}
               </div>
            
        </div>
        <header>
            <div>

            </div>
            <nav>
            {pagina > 0? previos : ''}
            {pagina < 12? next : ''}
            </nav>
        </header>

    </div>
)
}

export default Page;