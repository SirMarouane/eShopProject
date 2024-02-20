import test from "./assets/images/richard-mille.jpg"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import info from './assets/json/info.json';
import Sac from "./assets/images/sac-de-courses.png"

function App() {
  
  console.log(info.montres_de_luxe);
  return (
  <div className="overflow-x-hidden w-screen">
    <Navbar sac={Sac}/>

    <div className="flex justify-center items-center w-full overflow-x-hidden">
      

      <div className="flex gap-8 w-[80%] flex-wrap justify-center items-center ">
        
        {
          info.montres_de_luxe.map((elements,id) => {
            return (
              <Cards key={id} img={test}></Cards>
            )
          })
        }
      </div>

    </div>

    <Footer/>
  </div>
  )
}

export default App
