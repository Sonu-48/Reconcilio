import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homelayout } from "./Homelayout"
import Contactus from "./pages/Home/Contact/Contactus"


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Homelayout/>}/>
      <Route exact path="/" element={<Homelayout/>}/>
      <Route exact path="/" element={<Homelayout/>}/>
      <Route exact path="/contact" element={<Contactus/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
