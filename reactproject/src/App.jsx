import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homelayout } from "./Homelayout"
import Contactus from "./pages/Home/Contact/Contactus"
import Singleproduct from "./pages/Home/feturedproduct/Singleproduct";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Appbarheader from "./components/Appbarheader";
import { Errorpage } from "./components/Errorpage";


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Homelayout/>}/>
      <Route exact path="/product/:id" element={<Singleproduct/>}/>
      <Route exact path="/" element={<Homelayout/>}/>
      <Route exact path="/contact" element={<Contactus/>}/>
      <Route exact path="/appbar" element={<Appbarheader/>}/>
      <Route exact path="/*" element={<Errorpage/>}/>
     </Routes>
     <ToastContainer/>
     </BrowserRouter>
    </>
  )
}

export default App
