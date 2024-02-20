import test from "./assets/images/richard-mille.jpg"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import info from './assets/json/info.json';
import Sac from "./assets/images/sac-de-courses.png"
import Logo from "./assets/images/logo2.png"

function App() {
  
  console.log(info.montres_de_luxe);
  return (
  <div className="overflow-x-hidden w-[98vw] ">
    <Navbar sac={Sac}
            Logo={Logo}
    />

    <div className="flex justify-center items-center w-[98vw] overflow-x-hidden pb-[10%]">
      

      <div className="flex gap-16 w-[80%] flex-wrap justify-center items-center ">
        
        {
          info.montres_de_luxe.map((elements,id) => {
            return (
              <Cards key={id} img={test}></Cards>
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
