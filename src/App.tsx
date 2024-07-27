import {  Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Details from "./components/Details"
import Formadd from "./components/Formadd"
// import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main />} />      
      <Route path="/details" element={<Details />} />      
      <Route path="/form" element={<Formadd />} />      
    </Routes>
    </>  
  )
}

export default App
