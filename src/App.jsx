import test from "./assets/images/richard-mille.jpg"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import info from './assets/json/info.json';
import Sac from "./assets/images/sac-de-courses.png"
import Logo from "./assets/images/logo2.png"
import imgrolex from "./assets/images/submariner.jpg"

function App() {
  
  console.log(info.montres_de_luxe[0].img);
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
              <Cards key={id} img={info.montres_de_luxe[id].img}></Cards>
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
