import test from "./assets/images/richard-mille.jpg"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"

function App() {
  let lesmontres = ["ewa","zebi","ewa","zebi","ewa","zebi","ewa","zebi","ewa","zebi",]

  return (
  <div className="overflow-x-hidden w-screen">
    <Navbar/>

    <div className="flex justify-center items-center w-full overflow-x-hidden">
      

      <div className="flex gap-8 w-[80%] flex-wrap justify-center items-center ">
        
        {
          lesmontres.map((elements,id) => {
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
