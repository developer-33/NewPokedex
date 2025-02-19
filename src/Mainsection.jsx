import {   Routes, Route } from "react-router-dom"
import Pokedex from "./page/Pokdex"
import Homepage from "./page/Homepage"
const Mainsection = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pokedex" element={<Pokedex />} />
            

        </Routes>
    </div>
  )
}

export default Mainsection