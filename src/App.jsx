import test from "./assets/images/richard-mille.jpg"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"

function App() {
  

  return (
  <div>
    <Navbar/>

    <div className="flex flex-col justify-center items-center w-screen">
      

      <div className="flex gap-8 flex-wrap">
        <Cards img={test}/>
        <Cards img={test}/>
        <Cards img={test}/>
        <Cards img={test}/>

      </div>
      

    </div>

    <Footer/>
  </div>
  )
}

export default App
