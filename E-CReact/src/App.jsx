import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"



function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
