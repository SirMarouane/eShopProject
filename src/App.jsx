import test from "./assets/images/richard-mille.jpg"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import info from './assets/json/info.json';
import Sac from "./assets/images/sac-de-courses.png"
import Logo from "./assets/images/logo2.png"
import { useState } from "react";
import { useRef } from "react";
import React from "react";


function App() {
  let panier = []
  // const [pannier, setpannier] = useState([])
  // console.log(info.montres_de_luxe[0].stock);
  function panieradd(elements) {
    console.log(elements);
    // panier.push(info.montres_de_luxe[0].marque)
    
  }
  console.log(panier);
  return (
  <div className="overflow-x-hidden w-[98vw] flex flex-col justify-center items-center">
    <Navbar sac={Sac}
            Logo={Logo}
    />

    <div className="pt-10 flex justify-center items-center w-[60%] pb-[10%]">
      

      <div className="flex gap-20 w-[80%] flex-wrap justify-center items-center ">
        
        {
          info.montres_de_luxe.map((elements,id) => {
            return (
              <Cards key={id} panieradd={panieradd}  stock={info.montres_de_luxe[id].stock} prix={info.montres_de_luxe[id].prix} marque={info.montres_de_luxe[id].marque} nom={info.montres_de_luxe[id].nom} img={info.montres_de_luxe[id].img} ></Cards>
            )
          })
        }
      </div>

    </div>

    <Footer Logo={Logo}/>
  </div>
  )
}

export default App
