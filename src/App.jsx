import { Route, Routes } from "react-router-dom"
import { Button } from "./components/ui/button"
import Header from "./components/ui/header"
import Home from "./pages/home"
import Shop from "./pages/shop"

function App(){
  return <>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}  ></Route>
    <Route path="/shop" element={<Shop/>}  ></Route>
  </Routes>
  
  </>
}
export default App